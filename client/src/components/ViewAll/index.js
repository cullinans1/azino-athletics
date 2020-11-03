import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import spinner from "../../assets/spinner.gif";

function ViewAll() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // const { category } = state;

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
    } 
  }, [data, loading, dispatch]);

  function returnProducts() {
    return state.products;
  }

  return (
    <div className="container-fluid">
      <h2 id="product-header"> All Of Our Products </h2>
      {state.products.length ? (
        <div className="row product-card">
          {returnProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <h3> No Products!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ViewAll;
