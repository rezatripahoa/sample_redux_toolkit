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
  name: "comment",
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

    // GET COMMENT
    getCommentSuccess(state, action) {
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
export const { getCommentSuccess } = slice.actions;

// ----------------------------------------------------------------------

export function getAllComment() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      dispatch(slice.actions.getCommentSuccess(response.data.slice(0,10)));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
