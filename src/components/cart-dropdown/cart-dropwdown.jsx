import Button from "../button/button.component";
import { Link } from "react-router-dom";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage> Cart is Empty! </EmptyMessage>
        )}

        {}
        <Button buttonType="inverted">
          {" "}
          <Link to="/checkout"> GO TO CHECKOUT </Link>{" "}
        </Button>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
