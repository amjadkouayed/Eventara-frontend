import React, { useState } from "react";
import "./EventForm.css";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/events/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const event = await response.json();
      console.log("Created event:", event);
      navigate(`/dashboard/${event.event_id}/event-info`);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="event-form">
      <div className="form-group">
        <label>Event Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter event title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        {/* create new seperate lebals for date and time */}
        <div className="date-time-inputs">
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Location:</label>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          value={formData.location}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Event Description:</label>
        <textarea
          name="description"
          placeholder="Enter event description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Import Photo about the event:</label>
        <input type="file" />
      </div>

      <div className="form-group">
        <button type="button" onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save and Continue"}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default EventForm;
