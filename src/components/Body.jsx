import React from "react";
import keeper from "../images/keeper-app.jpg";
import blog from "../images/blog.jpg";
const Body = () => {
  return (
    <div className="display " id="3">
      <h1 class="text-center project text-white mb-4">Projects</h1>
      <div class="d-flex body justify-content-evenly">
      <div class="card">
        <img src={keeper} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Keeper App</h5>
          <p class="card-text">
            A simple note taking app made purely with React
          </p>
          <a
            href="https://keepeer-app-react.netlify.app/"
            class="btn btn-primary me-2"
          >
            Website Link
          </a>
          <a
            href="https://github.com/sid12701/keeper-apps"
            class="btn btn-primary"
          >
            Source Code
          </a>
        </div>
      </div>
      <div class="card">
        <img src={blog} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Blog Post App</h5>
          <p class="card-text">
            A blog post app with CRUD operations made with Node,Express, EJS and MongoDB
          </p>
          <a
            href=""
            class="btn btn-primary me-2"
          >
            Website Link
          </a>
          <a
            href="h"
            class="btn btn-primary"
          >
            Source Code
          </a>
        </div>
        </div>
        <div class="card">
        <img src={blog} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Portfolio Website</h5>
          <p class="card-text">
            A portfolio website made with Bootstrap, React, HTML, CSS and JavaScript
          </p>
          <a
            href="h"
            class="btn btn-primary"
          >
            Source Code
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
