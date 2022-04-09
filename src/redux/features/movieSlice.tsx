import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_URL } from "../../config";
import { IApi } from "../../interface";


//fetch API
export const fetchMovieApi = createAsyncThunk("movies/fetchMovieApi", async (count : number) => {
  return await fetch(API_URL + count )
    .then((res) => res.json())
    .catch((err: string) => console.log("error", err));
});


interface  IInitialState   {
  data: IApi | any;
  loading: boolean;
  error: string;
};


const initialState: IInitialState  = {
  data:{} ,
  loading: false,
  error: "The API isn't fetching",
};

export const dataSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchMovieApi.pending.toString()]: (state) => {
      console.log("Pending");
      state.loading = true;
      state.error = "";
    },
    [fetchMovieApi.fulfilled.toString()]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      state.data = payload;
      state.loading = false;
      state.error = "";
    },
    [fetchMovieApi.rejected.toString()]: (state, { payload }) => {
      console.log("Rejecteed!");
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { } = dataSlice.actions;

export default dataSlice.reducer;