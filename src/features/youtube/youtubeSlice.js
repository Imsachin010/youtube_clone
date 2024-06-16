import { createSlice } from '@reduxjs/toolkit';
import { getHomepageVideos } from '../../store/reducers/getHomepageVideos';
import { getSearchpageVideos } from '../../store/reducers/getSearchPageVideos';
import { getRecommendedVideo } from '../../store/reducers/getRecommendedVideo';
import { getVideoDetails } from '../../store/reducers/getVideoDetails';
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
    extraReducers : (builder) =>  {
        builder.addCase(getHomepageVideos.fulfilled, (state,action) => {
            if(action.payload && action.payload.parsed_Data){
                state.videos = action.payload.parsed_Data;
                state.nextPagetoken = action.payload.nextPagetoken;
            }
        })
        builder.addCase(getSearchpageVideos.fulfilled, (state,action) => {
            if(action.payload && action.payload.parsed_Data){
                state.videos = action.payload.parsed_Data;
                state.nextPagetoken = action.payload.nextPagetoken;
            }
        })
        builder.addCase(getRecommendedVideo.fulfilled, (state,action) => {
            if(action.payload && action.payload.parsed_Data){
                state.recommendedVideo = action.payload.parsed_Data;
                
            }
        })
        builder.addCase(getVideoDetails.fulfilled, (state,action) => {
            state.currentPlaying = action.payload; 
        })
    }
})

export const { clearVideos,changeSearchTerm,clearSearchTerm } = youtubeSlice.actions;
export default youtubeSlice.reducer;