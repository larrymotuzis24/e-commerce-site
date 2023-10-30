import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    // const handleAddItemToCart = (product) => {
    //     console.log(product)
    //         addItemToCart(product)
    // };

    return (
        <div className='product-card-container' >
            <img src={imageUrl} alt='imgurl' />
            <div className='footer'>
                <span className='name'>  { name } </span>
                <span className='price'> { price }</span>

            </div>
            <Button buttonType='inverted' onClick={() => addItemToCart(product)} > Add to Cart </Button>
            
        </div>
    )
};

export default ProductCard;