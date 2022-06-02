import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../components/api/Movieapi";
import { ApiKey } from "../../components/api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsynMovies",
  async (term) => {
    // const movieText = "Harry";
    const response = await movieApi
      .get(`?apiKey=${ApiKey}&s=${term}&type=movie`)
      .catch((err) => {
        console.log("Err :", err);
      });
    console.log(response.data);

    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    // const seriestext = "Friends";
    const response = await movieApi
      .get(`?apiKey=${ApiKey}&s=${term}&type=series`)
      .catch((err) => {
        console.log("Err :", err);
      });

    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    // console.log("id:-",id)
    const response = await movieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot= full`);
    // console.log("api called ", response.data);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMoviesorShows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMoviesorShows = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
    [fetchAsyncMovies.rejected]: (state, { payload }) => {
      console.log("rejected");
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMoviesorShows: payload };
    },
  },
});
export const { removeSelectedMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>state.movies.selectMoviesorShows;
export default movieSlice.reducer;
