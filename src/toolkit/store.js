import { configureStore } from "@reduxjs/toolkit";
import reducer from "../toolkit/reducer";

export const store = configureStore({
  reducer: {
    counter: reducer,
  },
});
