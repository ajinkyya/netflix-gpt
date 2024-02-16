import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
    },
    reducers : {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          },
          addPopularMovies: (state,action) => {
            state.popularMovies = action.payload
        },
        addTopratedMovies: (state,action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload
        },
    },
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopratedMovies, addUpcomingMovies}= movieSlice.actions;
export default movieSlice.reducer;