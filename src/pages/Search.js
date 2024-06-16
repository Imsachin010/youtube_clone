import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from "../components/Sidebar";
import Spinner from '../components/Spinner'
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { clearVideos } from '../features/youtube/youtubeSlice';
import { getSearchpageVideos } from '../store/reducers/getSearchPageVideos';


export default function Search() {
  const navigate = useNavigate();
  const searchTerm=useAppSelector((state)=>state.youtubeApp.searchTerm);
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state)=> state.youtubeApp.videos);

  useEffect(() => {
    dispatch(clearVideos(false));
    if(searchTerm===""){
        navigate("/");
    }else(
        dispatch(getSearchpageVideos(false))
    )
  }, [dispatch,navigate,searchTerm]);

  return (
    <div className='max-h-screen overflow-auto'>
      <div style={{height:"7.5vh"}}>
      <Navbar/>
      
      </div>
      <div className='flex' style={{height:"92.5vh"}}>
      <Sidebar/>
      {
        videos.length ? (
            <div className='py-8 pl-8 flex flex-col gap-5 w-full '>
                <InfiniteScroll 
                dataLength={videos.length} 
                next={() => dispatch(getSearchpageVideos(true))} 
                hasMore={videos.length<500}
                loader={<Spinner/>}
                height={650}
                >
                    
                    {videos.map((item) => {
                        return (
                          <div className='my-5 '>
                            <searchCard data={item} key={item.videoId}/>
                          </div>
                        )
                    })}
                    
                </InfiniteScroll>
          </div>
        ): (
          <Spinner/>
        )
      }
      </div>
    </div>
  )
};
