import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink className="Link" activeClassName="active-link" to="/main">
        main
      </NavLink>
      <NavLink className="Link" activeClassName="active-link" to="/photo">
        photos
      </NavLink>
      <NavLink className="Link" activeClassName="active-link" to="/posts">
        posts
      </NavLink>
      <NavLink className="Link" activeClassName="active-link" to="/contact">
        contacts
      </NavLink>
    </nav>
  );
}
