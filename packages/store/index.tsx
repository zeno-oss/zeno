import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
});

// Export all reducers and actions from here
export * from "./slices/counterSlice";
