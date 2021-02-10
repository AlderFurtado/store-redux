import { createStore, combineReducers } from "redux";

import productReducer from "./Product/Product.reducer";
import screensReducer from "./Screens/Screens.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  screens: screensReducer,
});

const store = createStore(rootReducer);

export default store;
