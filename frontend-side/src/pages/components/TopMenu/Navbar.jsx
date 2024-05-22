import React from "react";
import "./navbar.css";
import avatar from "../../../assets/images/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar-dashboard">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
        <a href="/#">Subscribers</a>
        <a href="/#">Video Management</a>
        <a className="active_link" href="/#">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="/#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="/#">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        <a href="/#">
          <img width="30" src={avatar} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
