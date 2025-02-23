import React from "react";
import PropTypes from "prop-types";
import "./EventWidget.css";

const EventWidget = ({ event }) => {
  return (
    <div className="event-widget">
      <div className="event-widget-header">
        <h3>{event.title}</h3>
        <p>{event.date}</p>
      </div>
      <div className="event-widget-body">
        <p>{event.description}</p>
        <p>{event.location}</p>
      </div>
      <button className="Select-widget-button">Select Event</button>
    </div>
  );
};

EventWidget.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default EventWidget;
