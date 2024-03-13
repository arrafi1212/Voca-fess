import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Body from "./components/Body";
import CountdownTimer from "./Time";

function Home() {
  const mySpecificDate = new Date(2024, 2, 12, 14, 30, 0, 0);
  console.log(mySpecificDate);
  return (
    <div>
      <div className="Time-box">
        <Navbar />
        <div>
          <h1 className="my-heading">Welcome to SMK ANANDA FESS</h1>
          <div className="asalan">
            <div className="loader"></div>
            <div className="loader"></div>
          </div>
        </div>
        <div className="box">
          <p className="my-paragraph">
            <CountdownTimer endDate={mySpecificDate} />
            {/* Time Remaining <br></br>
            <span style={{ fontWeight: "bold", fontSize: "64px" }}>
              00:00:00
            </span> */}
          </p>
        </div>
        <div className="Card-app">
          <Card />
        </div>
        <Body />
      </div>
    </div>
  );
}

export default Home;
