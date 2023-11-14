import { createAction } from "../../reducer/reducer.utils";
import CART_ACTION_TYPES from "./cart.types";



const addCartItem = (cartItems, productToAdd) => {
  const excistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (excistingCartItem) {
    return cartItems.map((cartItem) =>
    cartItem.id === productToAdd.id
    ? { ...cartItem, quantity: cartItem.quantity + 1 }
    : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const clearCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = clearCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART, newCartItems);
  
};

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART, newCartItems )
  };


const removeCartItem = (cartItems, cartItemToRemove) => {
    const excistingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === cartItemToRemove.id;
    });
  
    if (excistingCartItem.quantity === 1) {
      return cartItems.filter((item) => item.id !== cartItemToRemove.id);
    }
  
    return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
    );
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART, newCartItems)
 
};


export const setIsCartOpen = (boolean) => {
   return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
};



