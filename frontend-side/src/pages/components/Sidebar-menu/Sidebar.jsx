import React from "react";
import { logout } from "../../../auth/Auth"; 
import "./sidebar.css";
// import logo from "../../../assets/images/feature-banner.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          {/* <img src={logo} alt="logo" /> */}
          <h1>My Driver App</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="/#">Dashboard</a>
        </div>
        <h2>Admin management system</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="/#">Driver management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="/#">Customer management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="/#">Wallet management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="/#">Booking process management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="/#">Trip rates</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="/#">Backoffice special requests</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="/#">Analytic charts</a>
        </div>
        <h2>Driver app</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="/#">Authentication and account mng</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="/#">Availability status</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="/#">Location broadcasting</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="/#">Trip history</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="/#">Bonus points</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="/#">Cumulative earnings tracking</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="/#">My Wallet</a>
        </div>
        <h2>Reports</h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="/#">Administrator Reports</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="/#">Driver Reports</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <button onClick={logout}>
            <a href="/#" style={{ color: "inherit", textDecoration: "none" }}>
              Log out
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
