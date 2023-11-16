import Button from "../button/button.component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {

  const cartItems = useSelector(selectCartItems)

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage> Cart is Empty! </EmptyMessage>
        )}

        {}
        <Button>
          <Link to="/checkout"> GO TO CHECKOUT </Link>{" "}
        </Button>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
