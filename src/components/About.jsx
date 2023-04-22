import React from "react";
import { FaGithub ,FaHtml5, FaCss3, FaReact, FaNodeJs, FaPython, FaJava, FaJs, FaDatabase ,FaBootstrap} from 'react-icons/fa';
import Postman from "../assests/postman2.png";
import Mongodb from "../assests/mongo2.png";
import Mysql from "../assests/mysql.png";
import Express from "../assests/Express2.png";
import Cpp from "../assests/C++2.png";
import Jupyter from "../assests/jupyter.png";
import Tableau from "../assests/tableau.png";
function About() {
  return (
    <div className="about" id="2">
    <h3 class="text-center  py-4">About me</h3>
    <div class="container">
      <p>
        A beginner full stack web developer with a passion for creating
        innovative web applications and proficiency in various technologies,
        seeking to continuously expand knowledge and skills through
        self-learning and personal projects. A team player who enjoys
        collaborating with others to bring ideas to life, and thrives in
        fast-paced environments. Confident in making valuable contributions to
        any team and creating exceptional web applications.
      </p>
      <p>The technologies and skills that I have used: </p>
      <div class="d-flex justify-content-evenly m-5 py-3">
      <span>
        <FaGithub className="icon"/>
      </span>
      <span>
        <FaHtml5 className="icon"/>
      </span>
      <span>
        <FaCss3 className="icon"/>
      </span>
      <span>
        <FaReact className="icon"/>
      </span>
      <span>
        <FaNodeJs className="icon"/>
      </span>
      </div>
      <div class="d-flex justify-content-evenly m-5 py-3">
      <span>
        <FaPython className="icon"/>
      </span>
      <span>
        <FaJava className="icon"/>
      </span>
      <span>
        <FaJs className="icon"/>
      </span>
      <span>
        <FaDatabase className="icon"/>
      </span>
      <span>
        <img src={Postman} alt="postman" className="icon"/>
      </span>
      </div>
      <div class="d-flex justify-content-evenly m-5 py-3">
      <span><img src={Mongodb} alt="postman" className="icon"/></span>
      <span><img src={Mysql} alt="postman" className="icon"/></span>
      <span><img src={Cpp} alt="postman" className="icon"/></span>
      <span><img src={Express} alt="postman" className="icon"/></span>
      {/* <span><img src={} alt="postman" className="icon"/></span> */}
      <span><FaBootstrap className="icon"/></span>
      </div>
      <div class="d-flex justify-content-evenly m-5 py-3">
        <span><img src={Jupyter} className="icon"></img></span>
        <span><img src={Tableau} className="icon"></img></span>
      </div>
      </div>
    </div>
  );
}

export default About;
