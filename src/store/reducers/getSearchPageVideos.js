import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {parseData} from './utils/parseData';


const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getSearchpageVideos = createAsyncThunk(
    "youube/App/homePageVideos",
    async(isNext, {getState}) => {
        const { 
            youtubeApp: {nextPageToken : nextPagetokenFromState,videos, searchTerm},
        } = getState();
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${isNext
        ? `pageToken= ${nextPagetokenFromState}` : ""}`);
        
        const items = response.data.items;
        const parsed_Data = await parseData(items);


        return{parseData:[...videos, ...parsed_Data], nextPageToken:nextPagetokenFromState}
    }
)