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
      <div>
        <Jumbotron />
        <div className="container-fluid">
          <About />
          <div className="container-fluid category-title">
            <h2>View By Category</h2>
            <CategoryList />
          </div>
        </div>
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
