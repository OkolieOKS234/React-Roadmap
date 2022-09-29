import React from "react";
import reactIcon from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li>
          <img src={reactIcon} alt="react_facts" className="logo" />
        </li>
        <li className="nav_text">React course Study</li>
      </ul>
    </>
  );
}
