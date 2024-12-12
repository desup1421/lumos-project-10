import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/headerSlice";
import navbarReducer from "./slices/navbarSlice";
import productReducer from "./slices/productSlice";
import dataReducer from "./slices/dataSlice";
import emailReducer from "./slices/emailSlice";
import testimonialReducer from "./slices/testimonialSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  header: headerReducer,
  navbar: navbarReducer,
  products: productReducer,
  data: dataReducer,
  email: emailReducer,
  testimonials: testimonialReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;