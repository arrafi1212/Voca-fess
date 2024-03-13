import "../Competitive.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const Comp1 = () => {
  return (
    <div>
      <div className="ml">
        <div className="ml-nav">
          <Navbar />
          <h1></h1>
        </div>
        <h2>PENDAFTARAN</h2>
        <div className="page-center">
          <div className="container">
            <div className="text-row">
              <span>Waktu  :</span>
              <span>00:00:00</span>
            </div>
            <div className="text-row">
              <span>Tempat  :</span>
              <span>Online</span>
            </div>
            <button className="button-click">
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text"> Click me
              </span>
            </button>
          </div>
        </div>
        <div className="rules-ml">
        </div>
      </div>
    </div>
  );
};

export default Comp1;
