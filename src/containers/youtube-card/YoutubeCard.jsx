import React from "react";
import { Card } from "react-bootstrap";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { startYoutubeVideo } from "../../redux/actions/youtubeActions";
import "./YoutubeCard.css";
export const YoutubeCard = ({ video }) => {
  const dispatch = useDispatch();
  return (
    <Card
      onClick={() => dispatch(startYoutubeVideo(video.videoId))}
      className="p-3 mb-3 card-hover"
    >
      <div className="inner">
        <Card.Img
          variant="top"
          src={video.thumbnails?.high?.url}
          className="cursor-pointer"
        />
      </div>
      <Card.Body>
        <Card.Title>
          {_.truncate(video.title, {
            length: 100,
            ommission: "...",
          })}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
