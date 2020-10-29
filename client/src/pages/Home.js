import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="ccontainer">
      <header className="App-header">
        <img src={"/images/azino-clear.png"} className="logo" alt="logo" />
        <h1>A Z I N O</h1>
        <p> Coming soon ... </p>
        <Link to="/signup"> Signup </Link>
        <Link to="/login"> Login </Link>
      </header>
    </div>
  );
};

export default Home;
