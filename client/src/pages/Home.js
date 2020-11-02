import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import Jumbotron from "../components/Jumbotron";
import CategorySection from "../components/Categories";
import AllProducts from "../components/AllProducts";
import CategoryList from "./Categories";

const Home = () => {
  if (Auth.loggedIn()) {
    return (
      <div>
        <Jumbotron />
        {/* <CategorySection /> */}
        <CategoryList />
        {/* <AllProducts /> */}
      </div>
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
