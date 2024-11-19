//import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardCard from "./components/DashboardCard";
import ChartCard from "./components/ChartCard";
import Calendar from "./components/Calendar";
import UserCard from "./components/UserCard";
import "./App.css";

const App = () => {
  const dashboardData = [
    { icon: "fas fa-stethoscope text-green-500", title: "OPD Income", amount: "₹0.00" },
    { icon: "fas fa-procedures text-green-500", title: "IPD Income", amount: "₹0.00" },
    { icon: "fas fa-pills text-green-500", title: "Pharmacy Income", amount: "₹0.00" },
  ];

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content">
          <div className="grid grid-cols-3 gap-4">
            {dashboardData.map((item, index) => (
              <DashboardCard key={index} {...item} />
            ))}
          </div>
          <ChartCard title="Yearly Income & Expense" />
          <Calendar />
          <div className="grid grid-cols-1 gap-4 mt-4">
            <UserCard icon="fas fa-user-shield text-yellow-500" role="Admin" count={0} />
            <UserCard icon="fas fa-user-md text-yellow-500" role="Doctor" count={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
