import React, { useEffect } from "react";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_PRODUCTS } from "../utils/queries";
import spinner from "../assets/spinner.gif";

function SingleCategory(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const currentCategory = props.match.params.id;
  //used this to figure out how to get page to display according to the current category ID.
  // console.log(props)
 
  
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
    } else if (!loading) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="container-fluid">
      <h2 id="product-header">Products</h2>
      {state.products.length ? (
        <div className="row product-card">
          {filterProducts().map(product => (
              <ProductItem
                key= {product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default SingleCategory;
