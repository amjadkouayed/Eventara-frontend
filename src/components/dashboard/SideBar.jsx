import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/Sidebar.css";
// Import Sidebar Icons
import EventBoardIcon from "../../assets/sidebar-icons/event-dashboard-icon.png";
import EventInfoIcon from "../../assets/sidebar-icons/event-info-icon.png";
import InvitationFlyerIcon from "../../assets/sidebar-icons/flyer-icon.png";
import GuestlistIcon from "../../assets/sidebar-icons/guest-icon.png";
import VendorsIcon from "../../assets/sidebar-icons/vendor-icon.png";
import BudgetingIcon from "../../assets/sidebar-icons/budgeting-icon.png";
import GeneralSettingsIcon from "../../assets/sidebar-icons/general-settings-icon.png";
import { useParams } from "react-router-dom";
{
  /* var accepts property called isEventCreated */
}

const Sidebar = () => {
  const { event_id } = useParams();
  return (
    <div className="sidebar">
      <NavLink
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
        to="/dashboard/event-board"
      >
        <img src={EventBoardIcon} alt="Event Board" />
      </NavLink>
      {event_id && (
        <>
          <NavLink
            to={`/dashboard/${event_id}/invitation-flyer`}
            className="event-info"
          >
            <img src={InvitationFlyerIcon} alt="Invitation Flyer Icon" />
          </NavLink>
          <NavLink
            to={`/dashboard/${event_id}/guestlist`}
            className="guest-icon"
          >
            <img src={GuestlistIcon} alt="Guestlist Icon" />
          </NavLink>
          <NavLink to={`/dashboard/${event_id}/vendors`}>
            <img src={VendorsIcon} alt="Vendors Icon" />
          </NavLink>
          <NavLink to={`dashboard/${event_id}/budgeting`}>
            <img src={BudgetingIcon} alt="Budgeting Icon" />
          </NavLink>
        </>
      )}
      <NavLink to="/dashboard/general-settings" className="general-settings">
        <img src={GeneralSettingsIcon} alt="General Settings Icon" />
      </NavLink>
    </div>
  );
};

export default Sidebar;

// {/* If EventCreated true, expression in () will be evaluated */}
// {isEventCreated && (
//     <></>
// )}

// <div className="sidebar">
//     <div className="event-board">Event Board</div>
//     <div className="event-information">Event Information</div>
//     <div className="digital-flyers">Digital Flyers</div>
//     <div className="guests">Guests</div>
//     <div className="vendors">Vendors</div>
//     <div className="budgeting">Budgeting</div>
//     <div className="general-settings">General Settings</div>
// </div>
