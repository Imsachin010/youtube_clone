import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getHomepageVideos } from '../store/reducers/getHomepageVideos';

export default function Home() {

  const dispatch = useAppDispatch();
  const videos = useAppSelector((state)=> state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomepageVideos(false));
  }, [dispatch]);

  return (
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  )
};
