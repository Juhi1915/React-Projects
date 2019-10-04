import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));
