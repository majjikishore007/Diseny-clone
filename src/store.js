import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./redux/movies/MovieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
