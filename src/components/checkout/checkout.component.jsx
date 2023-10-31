import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";
import CheckOutItem from "../checkout-items/checkout-item";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span> Product </span>
        </div>
        <div className="header-block">
          <span> Description </span>
        </div>
        <div className="header-block">
          <span> Quantity </span>
        </div>
        <div className="header-block">
          <span> Price </span>
        </div>
        <div className="header-block">
          <span> Remove </span>
        </div>
      </div>
        {cartItems.map((cartItem) => {
          return (
           <CheckOutItem key={cartItem.id} cartItem={cartItem} />
          );
        })}
      <span className="total"> Total:${totalPrice} </span>
    </div>
  );
};

export default CheckOut;
