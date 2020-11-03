import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  if (Auth.loggedIn()) {
    return (
      <nav className="navbar  navbar-light bg-dark navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand " href="/">
          <img
            src={"/images/azino-clear.png"}
            width="30"
            height="30"
            alt="logo"
            loading="lazy"
            id="logo"
          />
          <span id="azino-nav">A Z I N O </span>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" id="azino-nav" href="/">
              Home
            </a>
            <a className="nav-link" id="azino-nav" href="/#about">
              About Us
            </a>
            <a className="nav-link" id="azino-nav" href="/#categories">
              Categories
            </a>
          </div>
          <div className="navbar-nav ml-md-auto">
            <button
              className="btn btn-outline-secondary d-lg-inline-block mb-3 mb-md-0 ml-md-3"
              id="logout-btn"
            >
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </button>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-light bg-dark navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand " href="/">
          <img
            src={"/images/azino-clear.png"}
            width="30"
            height="30"
            alt="logo"
            loading="lazy"
            id="logo"
          />
          <span id="azino-nav">A Z I N O </span>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" id="azino-nav" href="/">
              Home
            </a>
            <a className="nav-link" id="azino-nav" href="/#about">
              About Us
            </a>
            <a className="nav-link" id="azino-nav" href="/#categories">
              Categories
            </a>
          </div>
          <div className="navbar-nav ml-md-auto">
              <button className="btn btn-outline-secondary d-lg-inline-block mb-3 mr-0 mb-md-0 ml-md-3" id="login-btn">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn btn-outline-secondary d-lg-inline-block mb-3 mb-md-0 ml-md-3" id="signup-btn">
                <Link to="/signup">Sign Up</Link>
              </button>
          </div>
        </div>
      </nav>
      // <nav className="navbar navbar-light bg-dark">
      //   <a className="navbar-brand" href="/">
      //     <img
      //       src={"/images/azino-clear.png"}
      //       width="30"
      //       height="30"
      //       alt="logo"
      //       loading="lazy"
      //       id="logo"
      //     />
      //     <span id="azino-nav">A Z I N O </span>
      //   </a>
      //   <ul className="navbar-nav ml-md-auto">
      //     <div className="login-signup-btns">
      //       <button className="btn btn-outline-secondary" id="login-btn">
      //         <Link to="/login">Login</Link>
      //       </button>
      //       <button className="btn btn-outline-secondary" id="signup-btn">
      //         <Link to="/signup">Sign Up</Link>
      //       </button>
      //     </div>
      //   </ul>
      // </nav>
    );
  }
}

export default Nav;
