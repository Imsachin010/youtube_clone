import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {parseData} from '../../utils/parseData';


const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getHomepageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext, {getState}) => {
        const { 
            youtubeApp: {nextPageToken : nextPagetokenFromState},
        } = getState();
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video&${isNext
        ? `pageToken= ${nextPagetokenFromState}` : ""}`);

        const items = response.data.items;

        // extracting only req data for yt
        const parsed_Data = await parseData(items);


        return {parsed_Data:[...videos,...parsed_Data], nextPageToken:nextPagetokenFromState}
    }
)