import React from "react";

export default function Card() {
  return (
    <div className="w-64 h-60 gap-3 flex-col">
      <div className="relative ">
        <span
          className="absolute bottom-3 right-3 text-sm bg-gray-900
             py-0.5 px-2 z-10 "
        >
          {data.videoDuration}
        </span>
        <img src={data.videoThumbnail} alt="thumbnail" className="h-44 w-72 " />
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            {" "}
            <img
              src={data.channelInfo.image}
              alt="channelimage"
              className="h-9 w-9 rounded-full "
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-sm text-gray-500">
            <div>
              <a href="#" className="hover:text-white">
                {" "}
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span className="after:contents-['•'] after:mx-1">{data.videoViews} views</span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
