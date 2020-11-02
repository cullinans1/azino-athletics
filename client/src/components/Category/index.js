import React from "react";
import { Link } from "react-router-dom";
import SingleCategory from "../../pages/SingleCategory";

function Category({ categories }) {
  const { name, _id } = categories;

  return (
    <div className="category" key={_id}>
      <img
        src={require(`../../assets/${name}category.jpg`)}
        alt={name}
        className="category-box"
      />
      <Link to={`/category/${_id}`}>
        <button className="btn btn-lg btn-outline-danger">{name}</button>
      </Link>
    </div>
  );
}

export default Category;
