import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import "../styles/pages/DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="app-container">
      <DashboardHeader />
      <div className="content-wrapper">
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
