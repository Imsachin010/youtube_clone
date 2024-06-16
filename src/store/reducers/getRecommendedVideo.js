import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {parseRecommendedData} from "../../utils/parseRecommendedData";


const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getRecommendedVideo = createAsyncThunk(
    "youtube/App/getRecommendedVideo",
    async(videoId, {getState}) => {
        const { 
            youtubeApp: {currentPlaying: {
                channelInfo:{id:channelId}
            }},
        } = getState();
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/activities?&key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=videoId=${videoId}`);
        const items = response.data.items;

        // extracting only req data for yt
        const parsed_Data = await parseRecommendedData(items,videoId);

        return{parsed_Data}
    }
)