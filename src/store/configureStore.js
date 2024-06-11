import {configureStore} from '@reduxjs/toolkit';
import youtubeReducer from '../features/youtube/youtubeSlice';   

const store = configureStore({
    // reducer function - to generate functionality in parts 
    reducer:{
        youtubeApp: youtubeReducer
    }
    // state that will rendrr videos on yt
});

export default store;