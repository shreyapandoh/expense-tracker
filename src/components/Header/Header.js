import React from "react";
import logo from "../../assets/exp-track-logo.png";
import profile from "../../assets/profile-logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <img src={logo} alt="ExpTr Logo" width="100" />
        </NavLink>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Transactions
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Analytics
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Settings
          </NavLink>
        </nav>
        <img src={profile} alt="Profile Logo" width="60" />
      </header>
    </>
  );
};

export default Header;
