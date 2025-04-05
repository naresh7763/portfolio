import React from "react";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="overlay">
        <h1 className="name-title">Prajapati Naresh</h1>
        <div className="skills-scroll">
          <div className="skills-track">
            <span>MERN Stack</span>
            <span>React JS</span>
            <span>PHP</span>
            <span>Laravel</span>
            <span>CodeIgniter 3</span>
            {/* Repeat for smooth scroll */}
            <span>MERN Stack</span>
            <span>React JS</span>
            <span>PHP</span>
            <span>Laravel</span>
            <span>CodeIgniter 3</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
