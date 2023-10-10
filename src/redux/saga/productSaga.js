import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from "../constants";
import { takeEvery, put } from "redux-saga/effects";

function* getProducts() {
  console.warn("Calling API here");
  let data = yield fetch(`https://fakestoreapi.com/products`);
  data = yield data.json();
  console.warn("API data : ", data);

  yield put({ type: SET_PRODUCT_LIST, data });
}

// **IGNORE
function* addProducts() {
  console.warn("Calling API here");
}

// generative functions pauses the execution for async operations on the encounter of the keyword `yield`.
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  //   yield takeEvery(ADD_TO_CART, addProducts);
}

export default productSaga;
