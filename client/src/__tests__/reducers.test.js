import { reducers } from "../utils/reducers";

import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_CART_QUANTITY,
  TOGGLE_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../utils/actions";

const initialState = {
  products: [],
  categories: [{ name: "Shirts" }],
  currentCategory: "0",
};

test("UPDATE_PRODUCTS", () => {
  let newState = reducers(initialState, {
    type: UPDATE_PRODUCTS,
    products: [{}, {}],
  });

  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});

test("UPDATE_CATEGORIES", () => {
  let newState = reducers(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}],
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducers(initialState, {
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: '2'
    });
  
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('0');
  });
