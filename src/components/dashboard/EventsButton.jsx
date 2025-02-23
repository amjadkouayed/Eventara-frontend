import React from "react";
import { NavLink } from "react-router-dom";
import addIcon from "../../assets/add-icon.svg";
import "./EventsButton.css";

const EventsButton = () => {
  return (
    <div className="events-button-container">
      <NavLink
        to="/dashboard/event-board"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <button className="events-header-button">Events</button>
      </NavLink>
      <NavLink
        to="/dashboard/create-event"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <button className="create-event-header-button">
          Create Event <img src={addIcon} alt="Add Icon" className="add-icon" />{" "}
        </button>
      </NavLink>
    </div>
  );
};

export default EventsButton;
