import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from "../components/Sidebar";
import {useAppDispatch, useAppSelector} from "../hooks/useApp";
export default function Home() {

  const dispatch = useAppDispatch();
  const videos = useAppSelector((state)=> state.youtubeApp.videos);
  return (
    <div>
        <Navbar/>
        <Sidebar/>
    </div>
  )
}
