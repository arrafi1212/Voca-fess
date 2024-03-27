import React from "react";
import "../styles/Card.css";
import Comp1 from "./Comp1";

function Card({ title, description, image }) {
  return (
    <div className="row-card">
      <div className="card-a">
        <a style={{ textDecoration: "none" }} href="./Comp1">
          <div className="card-content">
            <h2 className="card-title">Mobile Legend</h2>
            <p className="card-description"></p>
            <img src="./ml1.png" />
          </div>
        </a>
      </div>

      <div className="card-a">
        <a style={{ textDecoration: "none" }} href="./Comp2">
          <div className="card-content">
            <h2 className="card-title">Modern Dance</h2>
            <p className="card-description"></p>
            <img src="./md1.png" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
