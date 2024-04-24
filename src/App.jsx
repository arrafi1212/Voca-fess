import React from "react";
import "./styles/App.css";
import "./styles/Footer.css"; // Import the Footer.css file
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./home.jsx";
import Comp1 from "./components/Comp1.jsx";
import Comp2 from "./components/Comp2.js";
import Comp3 from "./components/Comp3.js";
import Footer from "./components/Footer.js"; // Import the Footer component
import Navbar from "./components/Navbar.js";
import Rules from "./components/Rules.js";
import AboutUs from "./components/AboutUs.js";
import Body from "./components/Body.js";
import Pertandingan from "./components/Pertandingan.js"

function App() {
  return (
    <BrowserRouter>
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Comp1" element={<Comp1 />} />
          <Route path="/Comp2" element={<Comp2 />} />
          <Route path="/Comp3" element={<Comp3 />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="/Pertandingan" element={<Pertandingan />}/>
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
