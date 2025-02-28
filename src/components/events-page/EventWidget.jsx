import React from "react";
import PropTypes from "prop-types";
import "./EventWidget.css";
import { Link } from "react-router-dom";

const EventWidget = ({ event }) => {
  return (
    <div className="event-widget">
      <div className="event-widget-header">
        <h3>{event.title}</h3>
        <p>{event.location}</p>
        <p>{event.date}</p>
      </div>
      <div className="event-widget-body">
        <p>{event.description}</p>
      </div>
      <div className="event-widget-Buttons">
        <Link
          to={`/dashboard/${event.id}/event-info`}
          className="select-event-button"
        >
          <button>Select event</button>
        </Link>
      </div>
    </div>
  );
};

EventWidget.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default EventWidget;
