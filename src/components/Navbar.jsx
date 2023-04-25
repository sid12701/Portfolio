import React from "react";
import Resume from "../assests/Siddhant_Resume.pdf";;

function Navbar() {
  return (
    <div class="d-flex justify-content-end">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid justify-content-end">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#1"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#2">
                About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#3">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  text-white" href="#4">Contact Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link  text-white" href={Resume} download="Resume">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
