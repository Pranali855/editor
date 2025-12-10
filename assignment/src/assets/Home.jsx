import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Welcome to Diwali Vibes</h1>
        <p className="diwali">Celebrate This Diwali With Us </p>
      </div>
    </>
  );
}

export default Home;