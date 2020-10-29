import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import Jumbotron from '../components/Jumbotron';

const Home = () => {
  if (Auth.loggedIn()) {
    return (
        <Jumbotron />
    );
  } else {
    return (
      <div className="ccontainer">
        <header className="App-header">
          <img src={"/images/azino-clear.png"} className="logo" alt="logo" />
          <h1>A Z I N O</h1>
          <p> Coming soon ... </p>
        </header>
      </div>
    );
  }
};

export default Home;
