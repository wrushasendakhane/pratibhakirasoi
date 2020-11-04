import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { fetchYoutubePlaylistItems } from "../../redux/actions/youtubeActions";
import { YoutubeCard } from "../youtube-card/YoutubeCard";
import { Col, Container, Row } from "react-bootstrap";

export const YoutubePlaylist = ({ playlist }) => {
  const playlistItems = useSelector(
    (state) => state.youtube.playlists[playlist.playlistId].items
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (playlist) dispatch(fetchYoutubePlaylistItems(playlist.playlistId));
  }, []);

  if (!playlistItems) {
    return null;
  }
  return (
    <Container>
      <h4>{playlist.title}</h4>
      <h5>{playlist.description}</h5>
      <hr />
      <Row xs={12} md={4} className="m-2">
        {_.map(_.values(playlistItems), (item, index) => (
          <Col key={index}>
            <YoutubeCard video={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
