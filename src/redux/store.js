import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/users/userApi";
import { courseApi } from "./services/courses/courseApi";
import { uploadApiSlice } from "./services/uploadApi";
import authReducer from "./slices/users/authSlice";
import courseReducer from "./slices/courses/courseSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { progressApi } from "./services/progress/progressApi";
const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["userApi", "uploadApiSlice", "courseApi", "progressApi"],
};
export const rootReducers = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [uploadApiSlice.reducerPath]: uploadApiSlice.reducer,
  [courseApi.reducerPath]: courseApi.reducer,
  [progressApi.reducerPath]: progressApi.reducer,
  auth: authReducer,
  course: courseReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      userApi.middleware,
      uploadApiSlice.middleware,
      courseApi.middleware,
      progressApi.middleware
    ),
});
