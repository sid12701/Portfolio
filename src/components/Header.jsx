import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div class="message-box text-center">
        <h2 class="title">Hello my name is:Siddhant</h2>
        <p>Hover over me!</p>
      </div>

      <div className="content">
        <h1 class="text-center fw-bolder col-lg-12 col-md-6 col-sm-4">
          Full Stack Web developer and Data Analyst
        </h1>
        <p class="text-center fw-bolder col-lg-12 col-md-6 col-sm-4">
          A full stack web developer
        </p>
      </div>
    </div>
  );
};

export default Header;
