import React from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect"; 
const Header = () => {
  return (
    <div className="header" id="1">
      <Navbar />
      <div class="message-box text-center">
        <h2 class="title">Hello my name is:Siddhant</h2>
        <p>Hover over me!</p>
      </div>
{/* 
      <div className="content">
        <h1 class="text-center fw-bolder col-lg-12 col-md-6 col-sm-4">
          Full Stack Web developer and Data Analyst
        </h1>
        <p class="text-center fw-bolder col-lg-12 col-md-6 col-sm-4">
          A full stack web developer
        </p> */}
        <div className="content">
        <div className="typewriter" class="text-center fw-bolder col-lg-12 col-md-6 col-sm-4">
          <Typewriter
          className="type" 
            options={{loop: true}}
            onInit={(typewriter) => {
              typewriter
                .typeString("I am a Full Stack Web Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("I am a Data Analyst")
                .pauseFor(1000)
                .start();
            }}
          />
          </div>
          </div>
      </div>

  );
};

export default Header;
