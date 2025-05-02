import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import githubUserReducer from "./githubUserSlice";

const appStore = configureStore({
  reducer: {
    counter: counterReducer,
    githubUser: githubUserReducer,
  },
});

export default appStore;
