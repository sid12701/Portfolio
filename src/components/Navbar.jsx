import React from 'react'

function Navbar(){
    return (
        <div class="d-flex bg-dark justify-content-end">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid justify-content-end">
    <a class="navbar-brand text-white" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Contact Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled text-white">About Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}
export default Navbar;