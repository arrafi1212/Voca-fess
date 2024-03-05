import React from "react";
import "../Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
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
          <div className="col">
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>Instagram : @smk_ananda</li>
              <li>Facebook : @smk_ananda</li>
              <li>Tiktok : @smkananda</li>
              <li>Youtube : @smkananda</li>
            </ul>
          </div>
          {/* Column3 */}
        </div>
        <hr />
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
