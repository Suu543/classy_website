import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <h1>Classsy</h1>
        </Link>
        <Link to="/partners">Partners</Link>
      </div>
    </header>
  );
};

export default Navbar;
