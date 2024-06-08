import React from 'react'
import{ 
    MdHome, 
    MdSubscriptions, MdWatchLater, MdHistory,
    MdThumbUp, MdExpandMore, MdLibraryBooks, 
    MdSettings, MdFlag, MdHelp, MdFeedback 
} from "react-icons/md";
import {FaHistory} from "react-icons/fa";
import {SiYoutubeshorts} from "react-icons/si"

export default function Sidebar() {
    const mainLinks = [
        {
            icon: <MdHome/>,
            name: "Home"
        },
        {
            icon: <SiYoutubeshorts/>,
            name: "Shorts"
        },
        {
            icon: <MdSubscriptions/>,
            name: "Subscriptions"
        }
    ]
    const otherLinks = [
        {
            icon: <MdLibraryBooks/>,
            name: "Library"
        },
        {
            icon: <MdHistory/>,
            name: "History"
        },
        {
            icon: <MdWatchLater/>,
            name: "Watch Later"
        },
        {
            icon: <MdThumbUp/>,
            name: "Liked"
        },
        {
            icon: <MdSettings/>,
            name: "Settings"
        }
    ]
   

  return (
    <div>
        
    </div>
  )
}
