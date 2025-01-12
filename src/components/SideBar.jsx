import React from "react";
import "./Sidebar.css"; // Import the CSS file

const Sidebar = () => {
    return (

        <div className="sidebar">
            <div className="event-board">Event Board</div>
            <div className="event-information">Event Information</div>
            <div className="digital-flyers">Digital Flyers</div>
            <div className="guests">Guests</div>
            <div className="vendors">Vendors</div>
            <div className="budgeting">Budgeting</div>
            <div className="general-settings">General Settings</div>
        </div>
  );
};

export default Sidebar;
