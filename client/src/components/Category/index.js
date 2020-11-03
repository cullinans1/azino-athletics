import React from "react";
import { Link } from "react-router-dom";
// import SingleCategory from "../../pages/SingleCategory";

function Category({ categories }) {
  const { name, _id } = categories;

  return (
    <div className="col-lg-6 col-sm-12 category" key={_id}>
      <img
        src={require(`../../assets/${name}category.jpg`)}
        alt={name}
        className="category-box"
      />
      <div className="category-text">
      <Link to={`/category/${_id}`}>
        <button className="btn btn-lg btn-outline-dark categorybtn">{name}</button>
      </Link>
      </div>
    </div>
  );
}

export default Category;
