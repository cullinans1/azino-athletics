import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import Cart from "../Cart";

function ProductItem(item) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const {
    image,
    name,
    _id,
    price,
    sizes
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    console.log(itemInCart);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
    }
  }

  return (
    <div className="card card-body product-item col-lg-3 col-sm-12">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <span>${price}</span>
        <div>Sizes: {sizes}</div>
      </div>
      <button className='btn btn-outline-secondary' onClick={addToCart}>Add to cart</button>
      <Cart />
    </div>
  );
}

export default ProductItem;
