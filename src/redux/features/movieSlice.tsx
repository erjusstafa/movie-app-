import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_URL } from "../../config";
import { IApi } from "../../interface";


//fetch API
export const fetchMovieApi = createAsyncThunk("movies/fetchMovieApi", async () => {
  return await fetch(
    `https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_KEY_API}?groups=top_250&count=250`
  )
    .then((res) => res.json())
    .catch((err: string) => console.log("The API isn't fetching", err));
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