import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/kawo-legal-logo.png";
import Ale from "../Images/ale.jpg";
import facebook from "../Images/face1.webp";
import linkedin from "../Images/inkedin1.webp";
import instagram from "../Images/insta.webp";
import twitter from "../Images/social.webp";
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="container-fluid bk-image">
        <img src={Ale} alt="A meeting" />
        <nav className="navbar navbar-default navbar-fixed-top navbar-home">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand brand-image" href="#home">
                <img src={Logo} alt="kawolegal logo" />
              </a>
            </div>

            <div
              className="collapse navbar-collapse nav-button"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right nav-button">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/startups">Startups</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="centered">
          <h1>KAWOLEGAL</h1>
          <p>
            A collaborative ecosystem for problem
            <br />
            <span> solvers and support for Startups</span>.
          </p>
          <Link to="/register">
            <button type="submit" className="btn btn-default register-btn">
              Register Now!
            </button>
          </Link>
        </div>
      </div>
      <div className="footer">
        <div className="container footer-content">
          <p>&copy; 2017 KawoLegal. All Rights Reserved</p>
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>
    </div>
  );
};

export default Home;
