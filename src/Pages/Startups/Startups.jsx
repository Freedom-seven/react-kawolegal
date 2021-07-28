import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/kawo-legal-logo.png";
import facebook from "../Images/face1.webp";
import linkedin from "../Images/inkedin1.webp";
import instagram from "../Images/insta.webp";
import twitter from "../Images/social.webp";
import tuta from "../Images/tuta.jpeg";
import and from "../Images/and.jpeg";
import slate from "../Images/slate.png";
import sleek from "../Images/sleek.png";
import think from "../Images/think.png";
import "./Startups.css";

const Startups = () => {
  return (
    <div>
      <nav className="navbar navbar-default startups-navbar">
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
            <a className="navbar-brand startups-brand-image" href="#home">
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
      <div className="container">
        <div className="input-group search">
          <input
            type="text"
            className="form-control"
            placeholder="Search Startup by name or industry"
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              {" "}
              <span
                className="glyphicon glyphicon-search"
                aria-hidden="true"
              ></span>{" "}
              search
            </button>
          </span>
        </div>

        <div className="media media-container">
          <div className="media-left media-middle ">
            <a href="#1">
              <img
                className="media-object object"
                src={tuta}
                alt="tutahub"
              />
            </a>
          </div>
          <div className="media-body content">
            <h4 className="media-heading media-head">tutahub</h4>
            <p>a website for tutorials</p>
            <button type="submit" className="btn btn-default">
              {" "}
              See full details{" "}
            </button>
            <hr />
          </div>
        </div>
        <div className="media media-container">
          <div className="media-left media-middle">
            <a href="#2">
              <img
                className="media-object object"
                src={and}
                alt="Anditer"
                width="100"
                height="70vh"
              />
            </a>
          </div>
          <div className="media-body content">
            <h4 className="media-heading media-head">Anditer</h4>
            <p>Anditer is a tech blog</p>
            <button type="submit" className="btn btn-default">
              {" "}
              See full details{" "}
            </button>
            <hr />
          </div>
        </div>
        <div className="media media-container">
          <div className="media-left media-middle">
            <a href="#3">
              <img
                className="media-object object"
                src={think}
                alt="Think and Zoom"
              />
            </a>
          </div>
          <div className="media-body content">
            <h4 className="media-heading media-head">Think and Zoom</h4>
            <p>
              Providing solutions for the visually impaired, such as
              mind-controlled zooming, and wearable controlled zooming.
            </p>
            <button type="submit" className="btn btn-default">
              {" "}
              See full details{" "}
            </button>
            <hr />
          </div>
        </div>
        <div className="media media-container">
          <div className="media-left media-middle">
            <a href="#4">
              <img
                className="media-object object"
                src={slate}
                alt="Slatecube"
              />
            </a>
          </div>
          <div className="media-body content">
            <h4 className="media-heading media-head">Slatecube</h4>
            <p>
              Slatecube helps job seekers develop job-relevant skills, gain work
              experience, and land well paying jobs through
              <br /> world-className up-skilling courses and virtual
              internships.
            </p>
            <button type="submit" className="btn btn-default">
              {" "}
              See full details{" "}
            </button>
            <hr />
          </div>
        </div>
        <div className="media media-container">
          <div className="media-left media-middle">
            <a href="#5">
              <img
                className="media-object object"
                src={sleek}
                alt="Sleekjob Academy"
              />
            </a>
          </div>
          <div className="media-body content">
            <h4 className="media-heading media-head">Sleekjob Academy</h4>
            <p>
              Trains world className software developers in Ghana and matches
              them to employment opportunities
            </p>
            <button type="submit" className="btn btn-default">
              {" "}
              See full details{" "}
            </button>
            <hr />
          </div>
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

export default Startups;
