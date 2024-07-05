import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import movieReducer from "./movieSlice.js";
import tvReducer from "./tvSlice.js";
import gptReducer from "./gptSlice.js";
import watchListReducer from "./watchListSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    tvSeries: tvReducer,
    gpt: gptReducer,
    watchList: watchListReducer,
  },
});

export default appStore;
