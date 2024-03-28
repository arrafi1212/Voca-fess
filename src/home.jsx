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
  const mySpecificDate = new Date(2024, 3, 15, 14, 0, 0, 0);
  console.log(mySpecificDate);
  return (
    <div>
      <div className="Time-box">
        <Navbar />
        <div className="jumbo-image">
          <div className="left-jumbo">
            <Image
              className="logos"
              style={{ marginRight: "20px" }}
              width={70}
              src="/ananda.fe452d3ae4d7b3849e45.png"
              alt=""
            />
            <Image className="logos" width={70} src="/logo pk.png" alt="" />
          </div>

          <div className="right-jumbo">
            <Image
              style={{ marginRight: "20px" }}
              width={100}
              src="logo pandora.png"
              alt=""
              className="logos"
            />
            <Image className="logos" width={70} src="logo oskanda.png" alt="" />
          </div>
        </div>
        <div className="jumbotron">
          <Image
            style={{ marginBottom: "50px" }}
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
      </div>
    </div>
  );
}

export default Home;
