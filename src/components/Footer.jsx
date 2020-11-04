import React from "react";
import * as FaIcons from "react-icons/fa";
const Footer = () => {
  return (
    <div className="navbar fixed-bottom bg-light d-flex justify-content-center">
      <a
        href="https://github.com/wrushasendakhane"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaIcons.FaGithub color="black" />
      </a>
      &nbsp;2020 &copy; Wrushasen Dakhane. All rights reserved.
    </div>
  );
};

export default Footer;
