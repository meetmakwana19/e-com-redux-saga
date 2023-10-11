import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cartData = useSelector((state) => state.cartData);
  console.log("Cart data is ", cartData);

  let sum =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  return (
    <div className="d-flex p-5 justify-content-center">
      <div className="cart-container d-flex">
        <table>
          <tr>
            <td></td>
            <td>
              <b>Name</b>
            </td>
            <td>
              <b>Price</b>
            </td>
          </tr>
          {cartData &&
            cartData.map((item) => {
              return (
                <tr key={item.id} className="">
                  <td>
                    <img src={item.image} alt="Product" width={70} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
        </table>
      </div>
      <table className="price-details">
        <tr>
          <td>
            <b>Sum</b>
          </td>
          <td>{sum}</td>
        </tr>
        <tr>
          <td>
            <b>Tax</b>
          </td>
          <td>12%</td>
        </tr>
        <tr>
          <td>
            <b>Discount</b>
          </td>
          <td>25%</td>
        </tr>
        <tr>
          <td>
            <b>Total</b>
          </td>
          <td>{sum - (sum*0.012) - (sum*0.25)}</td>
        </tr>
      </table>
    </div>
  );
}
