import counter from "../reducers/counterReducer";
import shoppingCart from "../reducers/CartReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  shoppingCart
});
export default allReducers;