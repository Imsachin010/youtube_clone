import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from "../components/Sidebar";
import Spinner from '../components/Spinner'
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getHomepageVideos } from '../store/reducers/getHomepageVideos';
import { useEffect } from 'react';


export default function Home() {

  const dispatch = useAppDispatch();
  const videos = useAppSelector((state)=> state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomepageVideos(false));
    console.log(videos);
  }, [dispatch]);

  return (
    <div className='max-h-screen overflow-auto'>
      <div style={{height:"7.5vh"}}>
      <Navbar/>
      </div>
      
      <div className='flex' style={{height:"92.5vh"}}>
      <Sidebar/>
      <Spinner/>
      </div>
    </div>
  )
};
