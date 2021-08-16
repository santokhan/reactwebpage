import React from "react";
import logo from "./logo.svg";
import "./navbar.css";
import Search from "./search-form/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const link = "/public/index.html";
  const anchor = "text-light p-lg-2";
  const lightFont = "text-light p-lg-3 p-2 light-font";

  function NavLink(params) {
    return (
      <a href={link} className={lightFont}>
        {params}
      </a>
    );
  }

  return (
    <div className="container-fluid px-lg-5 py-lg-1 nav-bar">
      <div className="row justify-content-between flex-nowrap mx-lg-4 px-lg-2">
        <div className="col-lg-6 d-flex justify-content-between">
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" width="40px" />
            <div>
              <h5 className="mb-0 d-lg-block d-none">React</h5>
            </div>
          </div>

          <div className="d-flex px-lg-5 anchor-lg-box">
            {NavLink("Docs")}
            {NavLink("Tutorial")}
            {NavLink("Blog")}
            {NavLink("Community")}
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-between align-items-center">
          <Search />
          <div>
            <a href={link} className={anchor}>
              <span className="d-lg-inline d-none">v17.0.2</span>
            </a>
            <a href={link} className={anchor}>
              <FontAwesomeIcon icon={faLanguage} />
              <span className="d-lg-inline d-none">Languages</span>
            </a>
            <a href={link} className={anchor}>
              <span className="d-lg-inline d-none">
                Github
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
