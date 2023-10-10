import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { dummyAction, emptyCart } from "../redux/actions/cartAction";
import Products from "./Products";

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
        {/* <Button
          variant="success"
          onClick={() => dispatch(productList())}
        >
          Get Product List
        </Button>{" "} */}
      </div>
      <p>(Logs are in console.warn)</p>
      <Products/>
    </div>
  );
}
