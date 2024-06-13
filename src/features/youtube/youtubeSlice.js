import { createSlice } from '@reduxjs/toolkit';
import { getHomepageVideos } from '../../store/reducers/getHomepageVideos';

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPagetoken:null,
    recommendedVideo: []
};

const youtubeSlice = createSlice({
    name: 'youtubeApp',
    initialState,
    reducers: {
        clearVideos: (state) => {
            state.videos = [];
            state.nextPagetoken = null;
        },
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        clearSearchTerm: (state) => {
            state.searchTerm = "";
        }
    },
    extraReducera : (builder) =>  {
        builder.addCase(getHomepageVideos.fulfilled, (state,action) => {
            if(action.payload && action.payload.parsed_Data){
                state.videos = action.payload.parsed_Data;
                state.nextPagetoken = action.payload.nextPagetoken;
            }
        })
    }
})

export const { clearVideos,changeSearchTerm,clearSearchTerm } = youtubeSlice.actions;
export default youtubeSlice.reducers;