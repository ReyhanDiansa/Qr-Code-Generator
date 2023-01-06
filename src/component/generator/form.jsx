import React, { useState } from "react";
import "./style.css";

function Generator() {
  //state qrCodeUrl berisi hasil fetch api qr code
  const [qrCodeUrl, setQrCodeUrl] = useState(null);

  //state inputValue berisi hasil inputan user
  const [inputValue, setInputValue] = useState("");

  //function ketika user klik buat
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?data=${inputValue}`
    );
    setQrCodeUrl(response.url);
    setInputValue("");
  }

  //function yang akan dijalankan ketika user klik download image
  async function handleClick() {
    const response = await fetch(qrCodeUrl);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;

    //mendapatkan tanggal hari ini untuk penamaan file download
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    link.download = "qr_" + year + month + day;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(objectUrl);
  }

  return (
    <React.Fragment>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <h1>QR Code Generator</h1>
          <p>Masukkan Url anda</p>
          <div class="cari">
            <div class="search">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="ex: https://www.google.com"
              />
            </div>
            <div class="submit">
              <button type="submit">Buat</button>
            </div>
          </div>
        </form>

        {/* jika state qrCodeUrl tidak null atau ada isinya maka tampilkan gambar/qrcodenya, jika null/tidak ada isinya maka tampilkan tulisan No QR code to display */}
        {qrCodeUrl ? (
          <React.Fragment>
            <div class="wrap">
              <img src={qrCodeUrl} alt="QR code" />
              <div class="submit2">
                <button onClick={handleClick}>Download Qr Code</button>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <p>No QR code to display</p>
        )}
      </div>
    </React.Fragment>
  );
}

export default Generator;
