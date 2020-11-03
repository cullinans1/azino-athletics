import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";

import { QUERY_PRODUCTS } from "../utils/queries";
import spinner from "../assets/spinner.gif";
import { UPDATE_PRODUCTS } from "../utils/actions";

function SingleProduct() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
    }
  }, [products, data, loading, dispatch, id]);

  return (
    <>
      {currentProduct ? (
        <div className="single-product-item">
          <Link to="/viewall">
            <button className="btn btn-lg btn-outline-secondary product-btn">
              ← Back to Products
            </button>
          </Link>

          <div className="col-lg-4 col-sm-12 product-style">
            <img
              src={`/images/${currentProduct.image}`}
              alt={currentProduct.name}
            />
          </div>
          <div className="col-lg-4 col-sm-12 product-style">
            <h2>{currentProduct.name}</h2>

            <p>{currentProduct.description}</p>

            <p>
              <strong>Price: </strong>${currentProduct.price}{" "}
            </p>
          </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </>
  );
}

export default SingleProduct;
