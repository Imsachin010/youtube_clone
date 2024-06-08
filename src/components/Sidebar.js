import React from 'react'
import{ 
    MdHome, 
    MdSubscriptions, MdWatchLater,
    MdThumbUp, MdExpandMore, MdLibraryBooks, 
    MdSettings, MdFlag, MdHelp, MdFeedback 
} from "react-icons/md";
import {FaHistory} from "react-icons/fa";
import {SiYoutubeshorts} from "react-icons/si"

export default function Sidebar() {
    const mainLinks = [
        {
            icon: <MdHome className='text-xl'/>,
            name: "Home"
        },
        {
            icon: <SiYoutubeshorts className='text-xl'/>,
            name: "Shorts"
        },
        {
            icon: <MdSubscriptions className='text-xl'/>,
            name: "Subscriptions"
        }
    ]
    const otherLinks = [
        {
            icon: <MdLibraryBooks className='text-xl'/>,
            name: "Library"
        },
        {
            icon: <FaHistory className='text-xl'/>,
            name: "History"
        },
        {
            icon: <MdWatchLater className='text-xl'/>,
            name: "Watch Later"
        },
        {
            icon: <MdThumbUp className='text-xl'/>,
            name: "Liked"
        },
        {
            icon: <MdSettings className='text-xl'/>,
            name: "Settings"
        }
    ]
   

  return (
    <div className='w-2/12 bg-[#212121] p-1 pr-5 overflow-auto pb-8 h-screen'>
        <ul className='flex flex-col border-b-2 border-gray-700 '>
            {mainLinks.map(
                ({icon, name}) => {
                    return (
                        <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-zinc-700" : "" } rounded-xl`}>
                            <a href='#' className='flex items-center gap-5'>{icon}
                            <span className='tetxt-sm tracking-wier'>{name}</span>
                            </a>
                        </li>
                    )
                }
            )}
        </ul>
        <ul className='flex flex-col border-b-1 border-slate-900'>
            {otherLinks.map(
                ({icon, name}) => {
                    return (
                        <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-zinc-700" : "" } rounded-xl`}>
                            <a href='#' className='flex items-center gap-5'>{icon}
                            <span className='tetxt-sm tracking-wier'>{name}</span>
                            </a>
                        </li>
                    )
                }
            )}
        </ul>
    </div>
  )
}
