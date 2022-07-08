import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="">
      <div className="nav-wrapper">
        <div className="container">
          <a href="/" className="brand-logo left">
            Meal Shop
          </a>
        </div>
        <ul id="nav-mobile" className="right ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
