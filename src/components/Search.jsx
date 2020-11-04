import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { searchYoutube } from "../redux/actions/youtubeActions";
import { YoutubeCard } from "../containers/youtube-card/YoutubeCard";

const Search = ({ location }) => {
  const [term, setTerm] = useState("");
  const searchResult = useSelector((state) => state.youtube.searchResult);
  const dispatch = useDispatch();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const term = query.get("q");
    setTerm(term);
    dispatch(searchYoutube(term));
  }, [location.search]);

  if (!searchResult) return null;

  return (
    <Container className="py-2">
      <h4>SEARCH RESULT FOR: {term}</h4>
      <hr />
      <Row xs={12} md={4} className="m-2">
        {_.map(_.values(searchResult), (item, index) => (
          <Col key={index}>
            <YoutubeCard video={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Search;
