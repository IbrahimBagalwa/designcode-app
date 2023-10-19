import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/menuSlice";
import { userInfoApi } from "./features/userInfo";

export const store = configureStore({
  reducer: {
    action: menuReducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userInfoApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
