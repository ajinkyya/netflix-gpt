import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch : false,
  },
  reducers: {
    togglGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    
  },
});

export const { togglGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;