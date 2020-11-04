import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";
import history from "../../history";

const Header = ({ sidebar, showSidebar }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term) history.push(`/search?q=${term}`);
  };

  return (
    <div className="sticky-top">
      <IconContext.Provider value={{ color: "#000", size: "1.2em" }}>
        <div className="navbar">
          <div className="menu-bars">
            <FaIcons.FaBars
              onClick={showSidebar}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div
            className="sitename d-none d-sm-block"
            style={{
              fontSize: "40px",
              color: "black",
            }}
          >
            <Link to="/" className="menu-bars" style={{ color: "black" }}>
              Pratibha Ki Rasoi
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search recipes..."
                name="term"
                onChange={(e) => setTerm(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <div className="sitename">
                <Link
                  to="/"
                  className="menu-bars"
                  style={{ color: "black", fontSize: "20px" }}
                >
                  Pratibha Ki Rasoi
                </Link>
              </div>
              <div className="menu-bars">
                <AiIcons.AiOutlineClose style={{ cursor: "pointer" }} />
              </div>
            </li>
            <li className="nav-text">
              <Link to="/recipes" className="menu-bars">
                <BiIcons.BiFoodMenu />
                <span>Recipes</span>
              </Link>
            </li>

            <li className="nav-text">
              <Link to="/about" className="menu-bars">
                <SiIcons.SiAboutDotMe />
                <span>About</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/contact" className="menu-bars">
                <FaIcons.FaEnvelopeOpenText />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Header;
