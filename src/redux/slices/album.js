import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  posts: [],
  index: 0,
};

const slice = createSlice({
  name: "album",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET ALBUM
    getAlbumSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },

    // RESET STATE
    reset() {
      return initialState;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { getAlbumSuccess } = slice.actions;

// ----------------------------------------------------------------------

export function getAllAlbum() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      dispatch(slice.actions.getAlbumSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
