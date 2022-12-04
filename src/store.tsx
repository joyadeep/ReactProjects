import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userAPI } from "./services/userAPI";
import { postAPI } from './services/PostAPI'

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [postAPI.reducerPath]: postAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware).concat(postAPI.middleware),
});
