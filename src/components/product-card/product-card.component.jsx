import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {ProductCartContainer, Name, Price, Footer} from "./product-card.styles.jsx";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

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
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addItemToCart(product)}>
        {" "}
        Add to Cart{" "}
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
