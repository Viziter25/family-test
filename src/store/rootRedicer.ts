import { combineReducers } from "@reduxjs/toolkit";
import { testSlice } from "./slices/testSlice";

const rootReducer = combineReducers({
  [testSlice.name]: testSlice.reducer,
});

export default rootReducer;
