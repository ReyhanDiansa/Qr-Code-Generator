import { FaInstagram, FaGithub } from "react-icons/fa";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div class="footer">
        <p class="follow">Follow Reyhan Marsalino Diansa on:</p>
        <div class="row">
          <a href="https://www.instagram.com/reyhanmd._">
            <FaInstagram />
          </a>
          <a href="https://github.com/ReyhanDiansa">
            <FaGithub />
          </a>
        </div>
        <p class="follow">Qr Code Generator</p>

        <div class="row">
          <p>
            Ini adalah website sederhana yang bertujuan untuk memudahkan anda
            membuat Qr Code dengan url yang sudah anda inputkan,
          </p>
          <p>
            jika url yang anda inputkan ketika di klik buat tidak segera muncul
            qr codenya, berarti kemungkinan url itu kurang tepat
          </p>
        </div>
        <div class="row">
          <p>Copyright © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
