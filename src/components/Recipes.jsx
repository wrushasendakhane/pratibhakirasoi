import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import _ from "lodash";
import { YoutubePlaylist } from "../containers/youtube-playlist/YoutubePlaylist";
const Recipes = ({ setSidebar }) => {
  const playlists = useSelector((state) => state.youtube.playlists);
  return (
    <Container>
      <Row className="justify-content-center py-2">
        <h4>RECIPES</h4>
      </Row>
      <div onClick={() => setSidebar(false)} id="recipes">
        {_.values(playlists).length > 0 &&
          _.map(_.values(playlists), (playlist) => (
            <YoutubePlaylist key={playlist.playlistId} playlist={playlist} />
          ))}
      </div>
    </Container>
  );
};

export default Recipes;
