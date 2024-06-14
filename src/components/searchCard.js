import React from "react";

export default function searchCard({ data }) {
  return (
    <div className="flex gap-3">
      <div className="relative ">
        <span
          className="absolute bottom-3 right-3 text-sm bg-gray-900
                    py-0.5 px-2 z-10 " >{data.videoDuration}
        </span>
        <img src={data.videoThumbnail} alt="thumbnail" className="h-52 w-96 " />
      </div>
      <div className="flex gap-1 flex-col">
        <h3 className="max-w-2xl">
            <a href="#" className="line-clamp-2">{data.videoTitle}</a>
        </h3>
        <div className="text-xs text-gray-400">
            <div>
                <div>
                <span className="after:contents-['•'] after:mx-1">{data.videoViews} views</span>
                <span>{data.videoAge}</span>
                </div>
            </div>
        </div>
        <div className="min-w-fit my-2">
            <a href="#" className="flex items-center gap-2 text-xs text-gray-400 ">
              <img src={data.channelInfo.image} 
              className="h-9 w-6 rounded-full"
              alt="channel"/>
              <span>{data.channelInfo.name}</span>
            </a>
        </div>
        <div>
          <div className="max-w-2xl line-clamp-2 text-sm text-gray-400">
            <p>{data.videoDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
