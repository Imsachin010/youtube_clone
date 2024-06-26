import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from "../components/Sidebar";
import Spinner from '../components/Spinner';
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getHomepageVideos } from '../store/reducers/getHomepageVideos';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function Home() {

  const dispatch = useAppDispatch();
  const videos = useAppSelector((state)=> state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomepageVideos(false));
  }, [dispatch]);

  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{height:"7.5vh"}}>
      <Navbar/>
      
      </div>
      <div className='flex' style={{height:"92.5vh"}}>
      <Sidebar/>
      {
        videos.length ? (
          <InfiniteScroll 
          dataLength={videos.length} 
          next={() => dispatch(getHomepageVideos(true))} 
          hasMore={videos.length<500}
          loader={<Spinner/>}
          height={650}
          >
            <div className='grid gap-y-14 gap-x-8 grid-cols-4 p-8'>
              {videos.map((item) => {
                return <Card data={item} key={item.videoId}/>
              })}
            </div>
          </InfiniteScroll>
        ): (
          <Spinner/>
        )
      }
      </div>
    </div>
  )
};
