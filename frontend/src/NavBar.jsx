import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const NavBar = () => {

    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    return (
        <nav>
            <div className="logo">
                CART PROJO
            </div>

            <ul className="nav-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/cart">Cart</a>
                </li>
                <li style={{}} id='cart-nav'>
                    <a href="">
                        <FaShoppingCart style={{fontSize:"23px"}} />
                        <div className="quantity">
                            {totalQuantity}
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar