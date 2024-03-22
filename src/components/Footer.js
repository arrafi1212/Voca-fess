import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer ">
      <div className="footer-main">
        <div>
          <h3>SMK ANANDA BEKASI</h3>
          <p>Jl. Prof. Mr. Muh. Yamin No. 21 Duren</p>
          <p>Jaya, Bekasi Timur</p>
        </div>
        <div>
          <h3>Our Account</h3>
          <div className="account">
            <p>Instagram </p>
            <p>: @smk_ananda</p>
          </div>
          <div className="account">
            <p>Facebook </p>
            <p>: @smk_ananda</p>
          </div>
          <div className="account">
            <p>Tiktok </p>
            <p>: @smk_ananda</p>
          </div>
          <div className="account">
            <p>Youtube </p>
            <p>: @smk_ananda</p>
          </div>
        </div>
      </div>

      <div className="lower-main">
        <hr className="lines"></hr>
        <p>
          &copy;{new Date().getFullYear} SMK Ananda Bekasi | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
