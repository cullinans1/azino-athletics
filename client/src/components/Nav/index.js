import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  if (Auth.loggedIn()) {
    return (
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand" href="/">
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
        <div>
          <button className="btn btn-outline-secondary" id="logout-btn">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand" href="/">
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
        
        <div className="login-signup-btns">
          <button className="btn btn-outline-secondary" id="login-btn">
            <Link to="/login">Login</Link>
          </button>
          <button className="btn btn-outline-secondary" id="signup-btn">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </nav>
    );
  }
}

export default Nav;
