import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchYoutubePlaylists } from "../redux/actions/youtubeActions";
import YoutubePlayer from "../containers/youtube-player/YoutubePlayer";
import Navbar from "./navigation/Navbar";
import { Switch, Route } from "react-router-dom";
import Recipes from "./Recipes";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Search from "./Search";

export const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchYoutubePlaylists());
  }, []);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <Navbar sidebar={sidebar} showSidebar={showSidebar} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Recipes setSidebar={setSidebar} />}
        />
        <Route
          path="/recipes"
          render={() => <Recipes setSidebar={setSidebar} />}
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/search" component={Search} />
      </Switch>
      <Footer />
      <YoutubePlayer />
    </div>
  );
};
