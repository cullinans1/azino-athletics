import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import Jumbotron from "../components/Jumbotron";
import AllProducts from "../components/AllProducts";
import CategoryList from "./Categories";
import About from "../components/About";

const Home = () => {
  if (Auth.loggedIn()) {
    return (
      <div className="container-fluid">
        <Jumbotron />
        <About />
        <CategoryList />
        {/* <AllProducts /> */}
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
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
