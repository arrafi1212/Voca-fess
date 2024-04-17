import React, { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Body from "./components/Body";
import CountdownTimer from "./Time";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function Home() {
  const mySpecificDate = new Date(2024, 3, 18, 23, 59, 59, 0);
  console.log(mySpecificDate);
  return (
    <div>
      <div className="Time-box">
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
            ARE YOU READY FOR THE COMPETITION ?
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

        <div className="sponsor" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ fontSize: "48px", textAlign: "center", color: "white" }}>
            OUR SPONSORSHIP
          </h1>
          <Image
            style={{ marginBottom: "50px", marginTop: "70px", maxWidth: "200px", maxHeight: "200px" }}
            src="/Logo-UBM.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
