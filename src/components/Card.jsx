import React from "react";
import keeper from "../images/keeper-app.jpg";
import blog from "../images/blog.jpg";
import Portfolio from "../images/portfolio.jpg";

const Card = () => {
  return (
    <div id="3">
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
      <h3 class="text-white py-0">Projects</h3>
        <img src={keeper} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5><a href="https://keepeer-app-react.netlify.app/">Keeper app</a></h5>
        <p>Takes notes and displays them on the screen made purely using react <a href="https://github.com/sid12701/keeper-app">Source Code</a></p>
      </div>
      </div>
      <div class="carousel-item">
      <h3 class="text-white py-0 m-0">Projects</h3>
        <img src={blog} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5><a href="https://myblogpost-jw7q.onrender.com/">Blog web app</a></h5>
        <p>A blog web app that has authentication</p>
        <p>Made using Express, Node, Mongoose, PassportJS, EJS and Bootstrap <a href="https://github.com/sid12701/myblogpost" class="text-white">Source code</a></p>
      </div>
      </div>
      <div class="carousel-item">
      <h3 class="text-white py-0">Projects</h3>
        <img src={Portfolio} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h5>Portfolio site</h5>
        <p>My portfolio site made using React, Bootstrap and EmailJs <a href="https://github.com/sid12701/portfolio">Source Code</a></p>
      </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  )
}

export default Card;