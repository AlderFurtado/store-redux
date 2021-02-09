import { createStore, combineReducers } from "redux";

import productReducer from "./Product/Product.reducer";

const rootReducer = combineReducers({
  product: productReducer,
});

const store = createStore(rootReducer);

export default store;