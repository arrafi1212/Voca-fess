import "../Competitive.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const Comp3 = () => {
  return (
    <div>
      <div className="cp">
        <div className="cp-nav">
          <Navbar />
          <h1></h1>
        </div>
        <h2>PENDAFTARAN</h2>
        <div className="page-center">
          <div className="container">
            <div className="text-row">
              <span>Waktu :</span>
              <span>00:00:00</span>
            </div>
            <div className="text-row">
              <span>Tempat :</span>
              <span>Online</span>
            </div>
          </div>
        </div>
        <div className="rules-cp"></div>
      </div>
    </div>
  );
};

export default Comp3;
