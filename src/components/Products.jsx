import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/actions/productAction";
import { Button } from "react-bootstrap";
import { addToCart, removeFromCart } from "../redux/actions/cartAction";
import { sortProducts } from "../redux/actions/productAction";

export default function Products() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.productData);
  console.warn("Data in main component : ", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  let sortOrder = {
    order: "asc",
  };
  return (
    <div>
      <Button
        variant="primary"
        className="m-4"
        onClick={() => dispatch(sortProducts("asc"))}
      >
        Sort{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-sort-alpha-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
          />
          <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
        </svg>
      </Button>{" "}
      <Button
        variant="primary"
        className="m-4"
        onClick={() => dispatch(sortProducts("desc"))}
      >
        Sort{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-sort-alpha-down-alt"
          viewBox="0 0 16 16"
        >
          <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z" />
          <path
            fill-rule="evenodd"
            d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"
          />
          <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
        </svg>{" "}
      </Button>{" "}
      <div className="d-flex flex-wrap">
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="product p-1 d-flex flex-column align-items-stretch col-lg-2 col-sm-3  justify-content-end"
              >
                <img
                  src={item.image}
                  alt="Product"
                  width={90}
                  className="m-auto"
                />
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
    </div>
  );
}
