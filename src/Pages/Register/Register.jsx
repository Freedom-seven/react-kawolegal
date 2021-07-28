import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/kawo-legal-logo.png";
import facebook from "../Images/face1.webp";
import linkedin from "../Images/inkedin1.webp";
import instagram from "../Images/insta.webp";
import twitter from "../Images/social.webp";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <nav className="navbar navbar-default register-navbar">
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
            <a className="navbar-brand register-brand-image" href="#home">
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
      <div className="container form">
        <h3>Join KawoLegal. Sign up to get your Startup listed now!</h3>
        <form className="register">
          <div className="form-group ">
            <label for="exampleInputName2">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName2"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn btn-default">
            Sign Up
          </button>
        </form>
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

export default Register;
