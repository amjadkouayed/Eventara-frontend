import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import "../styles/pages/DashboardLayout.css";


const DashboardLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <div className="main-content">
          <Outlet /> {/* This renders the nested routes*/}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;