
import { combineReducers } from "@reduxjs/toolkit";
import moviesSliceReducer from "../redux/features/movieSlice"
const rootReducer = combineReducers({
    movies  : moviesSliceReducer
});

export default rootReducer;