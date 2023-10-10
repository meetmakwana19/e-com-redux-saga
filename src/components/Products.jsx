import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/actions/productAction";
import { Button } from "react-bootstrap";
import { addToCart, removeFromCart } from "../redux/actions/cartAction";

export default function Products() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.productData);
  console.warn("Data in main component : ", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {data &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              className="product p-1 d-flex flex-column align-items-stretch col-2 justify-content-end"
            >
              <img src={item.image} alt="Product" width={90} />
              <small>₹ {item.price}</small>
              <Button
                variant="primary"
                onClick={() => dispatch(addToCart(item))}
                className="m-3"
              >
                Add
              </Button>{" "}
              <Button
                variant="secondary"
                onClick={() => dispatch(removeFromCart(item.id))}
                className="mx-3"
              >
                Remove
              </Button>{" "}
            </div>
          );
        })}
    </div>
  );
}
