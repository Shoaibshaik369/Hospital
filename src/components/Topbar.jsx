//import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="flex items-center">
        <i className="fas fa-bars mr-4"></i>
        <h1 className="text-xl font-bold">Vishwaraj Hospital</h1>
      </div>
      <div className="flex items-center">
        <input type="text" placeholder="Search By Patient Name" className="mr-4" />
        <i className="fas fa-flag-usa mr-4"></i>
        <i className="fas fa-bell mr-4"></i>
        <i className="fas fa-user-circle"></i>
      </div>
    </div>
  );
};

export default Topbar;
