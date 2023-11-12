import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";
import CheckOutItem from "../../checkout-items/checkout-item";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);

  return (
    <CheckoutContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <Total>Total: ${totalPrice}</Total>
  </CheckoutContainer>

  );
};

export default CheckOut;
