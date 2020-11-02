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
      <div className="flex-row">
        {categories.map((categories, _id) => (
          <Category categories={categories} key={"category" + _id} />
        ))}
        <button className="btn-lg btn btn-dark">
          <Link to="/viewall"> View All Products </Link>
        </button>
      </div>
    </div>
  );
}
export default CategoryList;
