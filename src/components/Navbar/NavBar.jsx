import React from "react";
import { Link } from "react-router-dom";
import Search from "../SearchBar/SearchBar";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <a className="homePage">
        <Link to="/">Home</Link>
      </a>
      <a className="aboutPage">
        <Link to="/about">About</Link>
      </a>
      <a className="resourcesPage">
        <Link to="/resources">Resources</Link>
      </a>
      <a className="portfolioPage">
        <Link to="/portfolio">Portfolio</Link>
      </a>
      <a className="contactPage">
        <Link to="/contact">Contact Us</Link>
      </a>
      <a className="searchBar">
        <Search />
      </a>
    </div>
  );
}
export default NavBar;
