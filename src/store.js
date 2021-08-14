import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./redux/movies/MovieSlice";
import userReducer from "./redux/auth/UserSlice";
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});
