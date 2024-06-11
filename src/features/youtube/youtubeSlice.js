import { createSlice } from '@reduxjs/toolkit';
import { getHomepageVideos } from '../../store/reducers/getHomepageVideos';

const initialState = {
    video: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPagetoker:null,
    recommendedVideo: []
};

const youtubeSlice = createSlice({
    name: 'youtubeApp',
    initialState,
    reducers: {
        
    },
    extraReducera : (builder) =>  {
        builder.addCase(getHomepageVideos.fulfilled, (state,action) => {
            
        })
    }
})

export default youtubeSlice.reducers;