// NavBar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to={"/"} onClick={() => navigate("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/Login"} onClick={() => navigate("/Login")}>
            Login
          </Link>
        </li>
        <li>
          <Link to={"Register"} onClick={() => navigate("/Register")}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
