import { useDispatch, useSelector } from "react-redux";

import {ProductCartContainer, Name, Price, Footer} from "./product-card.styles.jsx";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const handleAddItem = (product) => {
    dispatch(addItemToCart(cart, product))
  }

  // const handleAddItemToCart = (product) => {
  //     console.log(product)
  //         addItemToCart(product)
  // };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt="imgurl" />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => handleAddItem(product)}>
        {" "}
        Add to Cart{" "}
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
