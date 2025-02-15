import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/EventBoard.css";
import SearchBar from "../components/SearchBar";
import EventWidget from "../components/EventWidget";

const EventBoard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:4000/events/", {
          headers: {
            Authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="event-board-container">
      <div className="searchbar-and-create-event-button">
        <SearchBar />
        <Link to="/dashboard/create-event" className="create-event-button">
          <span className="create-event-icon">+</span>
          <span className="create-event-text">Create an Event</span>
        </Link>
      </div>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length > 0 ? (
        <div className="event-widgets-container">
          {events.map((event) => {
            <EventWidget key={event.event_id} event={event} />;
          })}
        </div>
      ) : (
        <div className="no-events-message">
          <p>You have currently no events created.</p>
          <Link to="/dashboard/create-event" className="start-here-link">
            Start here →
          </Link>
        </div>
      )}
    </div>
  );
};

export default EventBoard;
