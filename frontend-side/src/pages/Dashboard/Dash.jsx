import { useState } from "react";
import Navbar from "../components/TopMenu/Navbar";
import Sidebar from "../components/Sidebar-menu/Sidebar";
import Main from "../components/Main/Main";

const Dash = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="container-dashboard">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      < Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}  />
     
    </div>
  );
};

export default Dash;
