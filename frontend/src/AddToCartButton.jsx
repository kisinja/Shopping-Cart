import { addItemToCart } from "./slices/cartSlice";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

const AddToCartButton = ({ item }) => {

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addItemToCart(item));
    };

    return (
        <button onClick={addToCartHandler} id="add-btn">Add to Cart</button>
    );
};

AddToCartButton.propTypes = {
    item: PropTypes.object.isRequired,
};

AddToCartButton.defaultProps = {
    item: [],
};

export default AddToCartButton;