import React from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "../../assets/Eventara-logo.svg";
import notificationIcon from "../../assets/notification-icon.svg";
import settingIcon from "../../assets/settings-icon.svg";
import "./DashboardHeader.css";
import EventsButton from "./EventsButton";

const DashboardHeader = () => {
  const { event_id } = useParams();
  return (
    <div className="dashboard-header">
      <div className="header-left">
        <img src={logo} alt="Eventara Logo" className="logo" />
      </div>
      <EventsButton />
      {event_id && (
        <div className="header-nav">
          <NavLink
            to={`/dashboard/${event_id}/event-info`}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            Event Information
          </NavLink>
          <NavLink
            to={`/dashboard/${event_id}/invitation-flyer`}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            Invitation
          </NavLink>
          <NavLink
            to={`/dashboard/${event_id}/guestlist`}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            Guests
          </NavLink>
          <NavLink
            to={`/dashboard/${event_id}/vendors`}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            Vendors
          </NavLink>
          <NavLink
            to={`/dashboard/${event_id}/budgeting`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Budgeting
          </NavLink>
        </div>
      )}
      <div className="header-right">
        <button className="notification-button">
          <img
            className="notification-icon"
            src={notificationIcon}
            alt="Notification Icon"
          />
        </button>
        <button className="setting-button">
          <img className="settings-icon" src={settingIcon} alt="Setting Icon" />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
