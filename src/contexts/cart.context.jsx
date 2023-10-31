import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const excistingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
        );

        if(excistingCartItem ) {
            return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
                {...cartItem, quantity: cartItem.quantity + 1} 
                : cartItem
            );
        }
        return [...cartItems, {...productToAdd, quantity:1}];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const excistingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === cartItemToRemove.id
    });

    if(excistingCartItem.quantity === 1 ){
        return cartItems.filter((item) => item.id !== cartItemToRemove.id );
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? 
                {...cartItem, quantity: cartItem.quantity - 1} 
                : cartItem
            );
};

const clearItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
} ;



export const CartContext = createContext({
    isCartOpen:false, 
    setIsCartOpen:() => {},
    cartItems:[],
    addItemToCart:() => {},
    cartCount:0,
    removeItemFromCart:() => {},
    clearItemFromCart:() => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount)
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    };

    const removeFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    };

    const clearCartItem = (itemToRemove) => {
        setCartItems(clearItemFromCart(cartItems, itemToRemove))
    };

    const value = { isCartOpen , setIsCartOpen, addItemToCart, cartItems, cartCount, removeFromCart,clearCartItem };

    return <CartContext.Provider value={value}> {children} </CartContext.Provider> 
};

