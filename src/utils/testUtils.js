import { createStore, applyMiddleware } from "redux";

import rootReducer from "../reducers/index";
import { middlewares } from "../configStore";

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
