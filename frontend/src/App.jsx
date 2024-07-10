import Cart from "./Cart";
import NavBar from "./NavBar";
import AddToCartButton from "./AddToCartButton";
import { useSelector } from "react-redux";
import PaymentForm from "./PaymentForm";
import Tutorial from "./Tutorial";

const App = () => {

  const item = useSelector(state => state.cart.items[0]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="upper">
          <h1 id="heading">Shopping Cart</h1>
          <div>
            <AddToCartButton item={item} />
          </div>
        </div>
        <Cart />
        <PaymentForm />
        <Tutorial />
      </div>
    </>
  );
};

export default App;