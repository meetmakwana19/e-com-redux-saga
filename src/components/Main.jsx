import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart, dummyAction } from "../redux/action";

export default function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "iPhone",
    price: "1L",
    color: "Black",
  };

  return (
    <div className="main">
      <div>
        <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
          Add
        </Button>{" "}
        <Button
          variant="primary"
          onClick={() => dispatch(dummyAction(product))}
        >
          Dummy Action
        </Button>{" "}
      </div>
      <p>(Logs are in console.warn)</p>
    </div>
  );
}
