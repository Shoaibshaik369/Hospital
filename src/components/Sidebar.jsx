//import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { icon: "fas fa-tachometer-alt", text: "Dashboard" },
    { icon: "fas fa-file-invoice-dollar", text: "Billing" },
    { icon: "fas fa-calendar-check", text: "Appointment" },
    { icon: "fas fa-procedures", text: "OPD - Out Patient" },
    { icon: "fas fa-hospital", text: "IPD - In Patient" },
    { icon: "fas fa-pills", text: "Pharmacy" },
    { icon: "fas fa-vials", text: "Pathology" },
    { icon: "fas fa-x-ray", text: "Radiology" },
    { icon: "fas fa-tint", text: "Blood Bank" },
    { icon: "fas fa-ambulance", text: "Ambulance" },
    { icon: "fas fa-desktop", text: "Front Office" },
    { icon: "fas fa-book-dead", text: "Birth & Death Record" },
    { icon: "fas fa-users", text: "Human Resource" },
    { icon: "fas fa-calendar-alt", text: "Duty Roster" },
    { icon: "fas fa-calendar", text: "Annual Calendar" },
    { icon: "fas fa-share-alt", text: "Referral" },
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <a key={index} href="#">
          <i className={item.icon}></i> {item.text}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;

