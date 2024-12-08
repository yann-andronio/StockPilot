import { configureStore } from "@reduxjs/toolkit";
import activeLinkReducer from "./slice/ActiveLinkSlice";

const Store = configureStore({
  reducer: {
    activeLink: activeLinkReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
