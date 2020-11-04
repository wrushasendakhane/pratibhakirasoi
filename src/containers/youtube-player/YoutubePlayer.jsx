import React from "react";
import Draggable from "react-draggable";
import { useSelector, useDispatch } from "react-redux";
import { Resizable, ResizableBox } from "react-resizable";
import { stopYoutubeVideo } from "../../redux/actions/youtubeActions";
import "./YoutubePlayer.css";
import "react-resizable/css/styles.css";

const YoutubePlayer = () => {
  const videoId = useSelector((state) => state.youtube.selectedVideoId);
  const dispatch = useDispatch();
  if (!videoId) return null;
  return (
    <Draggable handle=".handle">
      <div className="youtube-player">
        <ResizableBox width={450} height={300}>
          <iframe
            id="player"
            type="text/html"
            style={{ width: "100%", height: "100%" }}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
          ></iframe>
          <div
            className="close d-flex justify-content-center"
            onClick={() => dispatch(stopYoutubeVideo())}
          >
            <i className="fa fa-times"></i>
          </div>
          <div className="handle d-flex justify-content-center">
            <i className="fa fa-arrows-alt"></i>
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  );
};

export default YoutubePlayer;
