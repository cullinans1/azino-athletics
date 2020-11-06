import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useDispatch, useSelector } from "react-redux";

import { QUERY_PRODUCTS } from "../utils/queries";
import spinner from "../assets/spinner.gif";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import Cart from "../components/Cart";

function SingleProduct() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();
  

  const [currentProduct, setCurrentProduct] = useState({});
 

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

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

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
    }
    console.log(cart)
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });
  };
  return (
    <>
      {currentProduct && cart ?  (
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
          <div className="col-lg-4 col-sm-12 product-style align-self-center">
            <h2>{currentProduct.name}</h2>

            <p>{currentProduct.description}</p>

            <p>
              <strong>Price: </strong>${currentProduct.price}
              <br />
            </p>
            <div id="sizes">Sizes Available: {currentProduct.sizes}</div>
            <button
              className="btn btn-outline-secondary cart-btns"
              onClick={addToCart}
            >
              Add to Cart
            </button>
            <br />
            <button
              className="btn btn-outline-secondary cart-btns"
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default SingleProduct;
