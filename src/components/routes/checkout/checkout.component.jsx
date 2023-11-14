import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";
import CheckOutItem from "../../checkout-items/checkout-item";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../../store/cart/cart.selector.js";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal);

  

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
    <Total>Total: ${total}</Total>
  </CheckoutContainer>

  );
};

export default CheckOut;
