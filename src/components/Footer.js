import React from "react";
import "../Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5578958294569!2d107.02181982077833!3d-6.233173098398495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e9652540235%3A0xb2a0314f822c2de3!2sSEKOLAH%20ANANDA%20BEKASI!5e0!3m2!1sid!2sid!4v1710398814389!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          {/* Column1 */}
          <div className="col">
            <h3>SMK Ananda Bekasi</h3>
            <ul className="list-unstyled">
              <li>342-420-6969</li>
              <li>Lorem Ipsum, Indonesia</li>
              <li>Jl. Prof. Mr. Muh. Yamin No. 21 Duren Jaya, Bekasi Timur</li>
            </ul>
          </div>
          {/* Column2 */}
          <div style={{ textAlign: "RIght" }} className="col">
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>@smk_ananda : Instagram </li>
              <li>@smk_ananda : Facebook</li>
              <li>@smkananda : Tiktok</li>
              <li>@smkananda : Youtube</li>
            </ul>
          </div>
          {/* Column3 */}
        </div>
        <hr></hr>
        <div className="row-cr">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SMK Ananda Bekasi | All rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
