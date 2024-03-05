import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Body from "./components/Body";
import CountdownTimer from "./Time";

function App() {
  const mySpecificDate = new Date(2024, 3, 14, 0, 0, 0, 0);
  console.log(mySpecificDate);
  return (
    <div>
      <Navbar />
      <div className="Time-box">
        <div>
          <h1 className="my-heading">Welcome to SMK ANANDA FESS</h1>
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
      </div>
      <div className="Card-app">
        <h1>COMPETITIVE</h1>
        <Card />
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
