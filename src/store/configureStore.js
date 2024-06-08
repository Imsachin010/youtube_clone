import {configureStore} from '@reduxjs/toolkit';
import youtubeReducer from '../features/youtube/youtubeSlice';   

const store = configureStore({
    // reducer function - to generate functionality in parts 
    reducer:{
        youtubeApp: youtubeReducer
    }
});

export default store;