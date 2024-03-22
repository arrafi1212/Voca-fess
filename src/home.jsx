import React, { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Body from "./components/Body";
import CountdownTimer from "./Time";

function Home() {
  const mySpecificDate = new Date(2024, 2, 13, 14, 30, 0, 0);
  console.log(mySpecificDate);
  return (
    <div>
      <div className="Time-box">
        <Navbar />
        <div className="jumbotron">
          <div className="jumbotron-desc">
            <h1
              style={{
                fontSize: "100px",
                textAlign: "start",
                margin: "0",
              }}
              className="my-heading"
            >
              WELCOME TO SMK <br></br> ANANDA FEST
            </h1>
            <button className="jumbo-button">Learn More</button>
          </div>
        </div>
        <div>
          <h1 className="title-comp">ARE YOU READY FOR THE COMPETITION ?</h1>
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
