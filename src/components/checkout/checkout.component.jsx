import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.scss';


const CheckOut = () => {
    const { cartItems, addItemToCart, removeFromCart } = useContext(CartContext);


   
    return (
        <div className="checkout-container">
            <div className="labels">
                <span> Product </span>
                <span> Description </span>
                <span> Quantity </span>
                <span> Price </span>
                <span> Remove </span>
            </div>
            <div className="cart-container">
                {
                    cartItems.map((cartItem) => {
                        return (
                            <div key={cartItem.id} className="cart-item-container">
                            <span> <img className='cartItem-img' src={cartItem.imageUrl} alt={`${cartItem.name}`}/> </span> 
                                <span> {cartItem.name} </span>
                                <span> <button onClick={() => removeFromCart(cartItem)}> {'<'} </button > {cartItem.quantity} <button onClick={() => addItemToCart(cartItem)}> { '>'} </button> </span>
                                <span> {cartItem.price} </span>
                                <span> X </span>
                                </div>
                        )
                    })
                }

            </div>
        </div>
    )
};

export default CheckOut;