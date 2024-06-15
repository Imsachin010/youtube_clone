import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import Navbar from "../components/Navbar";

export default function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );

  const recommendedVideo = useAppSelector(
    (state) => state.youtubeApp.recommendedVideo
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      navigate("/");
    }
  }, [id, navigate, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) dispatch(getRecommendedVideo(id));
  }, [currentPlaying, dispatch, id]);
  return (
    <>
      {currentPlaying && currentPlaying.videoId === id && (
        <div className="max-h-screen overflow-auto">
          <div style={{ height: "7.5vh" }}>
            <Navbar />
          </div>
          <div>
            <div>
                <div>
                    <iframe 
                    frameBorder={0}
                    width={800}
                    height={502}
                    allowFullScreen
                    title="Youtube Player"
                    src="https://www.youtube.com/embed/${id}?autoplay-1">

                    </iframe>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
