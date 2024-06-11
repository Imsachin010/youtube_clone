import React from 'react'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; 


export const parseData = async(items) => {

try {
    const videoIds = [];
    const channelIds = [];

    items.forEach((item) => {
        channelIds.push(items.snippet.channelId);
        videoIds.push(items.id.videoIds);
    });

    const {
        data: {item:channelsData},
    } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet.contentDetails&id=${channelIds}.join(",")}&key=${API_KEY}`);

    const parsedchannelsData = [];
    channelsData.forEach((channel) => parsedchannelsData.push({
        i:channel.id,
        image: channel.snippet.thumbnails.default.url,
    }));
    
    const {
        data: {item:videosData},
    } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDeatils,statistics&id=${videoIds}.join(",")}&key=${API_KEY}`);

    const parseData = [];
    items.forEach((item, index) => {
        const{image:channelImage}  = parsedchannelsData.find((data) => data.id === item.snippet.channelId);
        if(channelImage){
            parseData.push({
                videoId : item.id.videoData,
                videoTitle : item.snippet.title,
                videoDescription : item.snippet.description,
                videothumbnail : item.snippet.thumbnails.medium.url,
                videoLink : `https://www.youtube.com/watch?v=${item.id.videoId}`,
                videoDuration : parseVideoDuration(
                    videosData[index].contentDetails.duration
                ),
                videoViews:convertrawtostring(
                    videosData[index].statistics.viewCount
                ),
                videoAge:timeSince(
                    new DataTransfer(item.snippet.publishedAt)
                ),
                channelInfo: {
                    id: item.snippet.channelId,
                    image: channelImage,
                    name: item.snippet.channelTitle
                },
            });
        }
    });

    return parseData;
}
catch(error){
    console.log(error)
}

  return (
    <div>

    </div>
  )
}
