import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { changeSearchTerm, clearVideos } from "../features/youtube/youtubeSlice";
import { getSearchpageVideos } from "../store/reducers/getSearchPageVideos";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = () => {
    if (location.pathname !== "/search") {
      return navigate("/search");
    } else {
      dispatch(clearVideos);
      dispatch(getSearchpageVideos(false));
    }
  };
  return (
    <div className="flex justify-between items-center px-14 h-14 bg-[#090909] opacity-95 sticky">
      <div className="flex gap-8 items-center text-2xl ">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <IoLogoYoutube className="text-2xl text-red-600" />
          <span className="text-xl font-semibold">YouTube</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div>
            <div className="flex bg-zinc-900 items-center px-4 pr-2 h-10 rounded-3xl">
              <div className="flex gap-5 items-center pr-5">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-96 bg-zinc-900 border-none focus:outline-none"
                  value={searchTerm}
                  onChange={e => dispatch(changeSearchTerm(e.target.value))}
                />
              </div>
              <button className="h-10 w-16 flex items-center justify-center bg-zinc-900 rounded-r-3xl">
                <IoSearch className="text-xl " />
              </button>
            </div>
          </div>
        </form>

        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <FaMicrophone />
        </div>
      </div>
      <div className="flex gap-8 items-center text-xl">
        <RiVideoAddFill />
        <div className="relative">
          <MdNotificationsActive />
          <span className="absolute text-xs bg-red-600 rounded-full px-1 bottom-2 left-2 ">
            9+
          </span>
        </div>
        <img
          alt="Profile"
          className="w-9 h-9 rounded-full"
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </div>
  );
}
