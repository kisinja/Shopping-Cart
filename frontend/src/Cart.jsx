import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from './slices/cartSlice';


const Cart = () => {

    const cartItems = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch();

    const removeFromCartHandler = (id) => {
        dispatch(removeItemFromCart(id));
    };

    return (
        <div className='cart-container'>
            <h1 style={{ textDecoration: "underline" }}>Your Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <ul className='item'>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <div className='item-upper'>
                                <div className="details">
                                    <h3 id='item-title'>{item.title}<span className="item-quantity"> x {item.quantity}</span></h3>
                                    <div className='image-container'>
                                        <img src={item.img} alt="product image" />
                                    </div>
                                </div>
                                <div className='item-price'>
                                    <span>Price:</span> ${item.price}
                                </div>
                            </div>

                            <button onClick={() => removeFromCartHandler(item.id)} id='remove-btn'>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <h3 className='empty-cart'>Your cart is empty !!</h3>
            )}
            <h3 className='amount'>Total Amount: <span className="total-amount">${totalAmount}</span></h3>
        </div>
    )
}

export default Cart
