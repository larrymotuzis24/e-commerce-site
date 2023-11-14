import { useSelector, useDispatch } from "react-redux";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { removeItemFromCart, addItemToCart, clearItemFromCart} from "../../store/cart/cart.action.js";
import { selectCartItems } from '../../store/cart/cart.selector.js';

const CheckOutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  const { name, imageUrl, quantity, price } = cartItem;

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem))
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem))
  };

  const handleRemoveItemFromCart = () => {
    dispatch(clearItemFromCart(cartItems, cartItem))
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={handleRemoveItemFromCart}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
