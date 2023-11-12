import {  CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton } from './checkout-item.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckOutItem = ({cartItem}) => {
    const { name, imageUrl, quantity, price } = cartItem;
    const { clearCartItem,  addItemToCart, removeFromCart } = useContext(CartContext);

    const addItemHandler = () => {
        addItemToCart(cartItem)
    };
    const removeItemHandler = () => {
        removeFromCart(cartItem)
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
        <RemoveButton onClick={() => clearCartItem(cartItem)}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
    )
};

export default CheckOutItem;