import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {parseData} from './utils/parseData';


const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getHomepageVideos = createAsyncThunk(
    "youube/App/HomepageVideos",
    async(isNext, {getState}) => {
        const { 
            youtubeApp: {nextPageToken : nextPagetokenFromState}, getHomepageVideos
        } = getState();
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video`);
        
        // const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key = ${API_KEY}${isNext ? `&pageToken=${nextPagetokenFromState}` : ""}`);

        const items = response.data.items;
        // extracting only req data for yt
        const parsed_Data = await parseData(items);
    }
)