import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-light bg-dark">
      <a className="navbar-brand" href="/">
        <img
          src={"/images/azino-clear.png"}
          width="30"
          height="30"
          alt="logo"
          loading="lazy"
          id='logo'
        />
          A Z I N O
      </a>
    </nav>
  );
}

export default Nav;
