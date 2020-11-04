import React from "react";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
function Social() {
  return (
    <IconContext.Provider value={{ color: "#000", size: "2em" }}>
      {process.env.REACT_APP_FACEBOOK_LINK ? (
        <a
          href={`${process.env.REACT_APP_FACEBOOK_LINK}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2"
        >
          <AiIcons.AiOutlineFacebook />
        </a>
      ) : null}
      {process.env.REACT_APP_INSTAGRAM_LINK ? (
        <a
          href={`${process.env.REACT_APP_INSTAGRAM_LINK}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2"
        >
          <AiIcons.AiOutlineInstagram />
        </a>
      ) : null}
      {process.env.REACT_APP_YOUTUBE_LINK ? (
        <a
          href={`${process.env.REACT_APP_YOUTUBE_LINK}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2"
        >
          <AiIcons.AiOutlineYoutube />
        </a>
      ) : null}
    </IconContext.Provider>
  );
}

export default Social;
