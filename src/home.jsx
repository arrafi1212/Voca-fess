import React, { useState, useEffect  } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Body from "./components/Body";
import CountdownTimer from "./Time";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function Home() {
  const mySpecificDate = new Date(2024, 4, 18, 15, 5, 0, 0);
  console.log(mySpecificDate);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  
  return (
    <div>
      <div className="Time-box">
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
          <button onClick={scrollToTop} title="Go to top">
            &#8593;
          </button>
        </div>
        <Navbar />
        <div className="jumbotron">
          <Image
            style={{ marginBottom: "50px", marginTop: "70px"}}
            className="pandora"
            src="/logoJumbotronHome.png"
          />
        </div>
        <div>
          <h1 className="title-comp" style={{ color: "white" }}>
            {/* ARE YOU READY FOR THE COMPETITION ? */}
            "See You In The Next Tournament&#128075;&#128075;"
          </h1>
          <div className="box">
            <p className="my-paragraph">
              <CountdownTimer endDate={mySpecificDate} />
            </p>
          </div>
        </div>
        <div className="Card-app">
          <h1 style={{ fontSize: "48px", textAlign: "center", color: "white" }}>
            COMPETITION
          </h1>
          <p style={{ color: "white", marginBottom: "20px" }}>
            Register here and be a winner
          </p>
          <Card />
        </div>
        <Body />

        <div className="sponsor">
          <h1 style={{ fontSize: "48px", textAlign: "center", color: "white", marginBottom: "25px" }}>
            OUR SPONSORSHIP
          </h1>
          <div className="sponsor-logos">
            <div className="sponsor1">
              <Image
                src="/LOGO-RADEN-MASTER_BLACK.png"
                alt="Raden Master"
                style={{
                  width:"80%"
                }}
              />
            </div>
            <div className="sponsor2">
              <Image
                src="/Logo-UBM.png"
                alt="UBM"
                style={{
                  width:"100%"
                }}
              />
            </div>
            <div className="sponsor3">
              <Image
                src="/LOGO-1a.png"
                alt="Logo 1a"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
