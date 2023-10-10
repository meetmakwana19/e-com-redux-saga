import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, dummyAction, emptyCart, removeFromCart } from "../redux/actions/cartAction";
import { productList } from "../redux/actions/productAction";

export default function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "iPhone",
    price: "1L",
    color: "Black",
  };
  const data = useSelector((state) => state.productData);
  console.warn("Data in main component : ", data);

  return (
    <div className="main">
      <div>
        <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
          Add
        </Button>{" "}
        <br />
        <br />
        <Button variant="secondary" onClick={() => dispatch(removeFromCart(product))}>
          Remove
        </Button>{" "}
        <br />
        <br />
        <Button variant="danger" onClick={() => dispatch(emptyCart())}>
          Empty Cart
        </Button>{" "}
        <br />
        <br />
        <Button
          variant="info"
          onClick={() => dispatch(dummyAction(product))}
        >
          Dummy Action
        </Button>{" "}
        <br />
        <br />
        <Button
          variant="success"
          onClick={() => dispatch(productList())}
        >
          Get Product List
        </Button>{" "}
      </div>
      <p>(Logs are in console.warn)</p>
    </div>
  );
}
