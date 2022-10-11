import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/website-icon.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="nav-container flex items-center justify-between px-3 py-4 bg-blue-400 w-full">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        <h1 className="text-3xl font-bold text-black-500">Quiz Professor</h1>
      </div>
      <div className="">
        <NavLink
          className={`mr-3 text-lg font-semibold text-slate-900 ${({
            isActive,
          }) => (isActive ? "active" : undefined)}`}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={`mr-3 text-lg font-semibold text-slate-900 ${({
            isActive,
          }) => (isActive ? "active" : undefined)}`}
          to="/statistics"
        >
          Statistics
        </NavLink>
        <NavLink
          className={`mr-3 text-lg font-semibold text-slate-900 ${({
            isActive,
          }) => (isActive ? "active" : undefined)}`}
          to="/blog"
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
