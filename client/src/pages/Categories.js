import React, { useEffect } from "react";
import Category from "../components/Category";
import { QUERY_CATEGORIES } from "../utils/queries";
import { UPDATE_CATEGORIES } from "../utils/actions";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";

function CategoryList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { categories } = state;
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
    } else if (!loading) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
    }
  }, [categoryData, loading, dispatch]);

  return (
    <div>
      <div className="row">
        {categories.map((categories, _id) => (
          <Category categories={categories} key={"category" + _id} />
        ))}
        <div className="col-lg-6 col-sm-12 category">
          <img src={require('../assets/ViewAll.jpg')} alt="Clothes" className="category-box"/>
          <div className="category-text">
            <Link to="/viewall"> 
            <button className="btn btn-lg btn-outline-dark categorybtn"> View All Products </button>
            </Link>
          </div>
          {/* <button className="btn-lg btn btn-dark view-all">
            <Link to="/viewall"> View All Products </Link>
          </button> */}
        </div>
      </div>
    </div>
  );
}
export default CategoryList;
