import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/pages/EventInfo.css";

const EventInfo = () => {
  const { event_id } = useParams();
  const [event, setEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`http://localhost:4000/events/${event_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => setEvent(data));
  }, [event_id, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:4000/events/${event_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update event");
      }

      const updatedEvent = await response.json();
      setEvent(updatedEvent);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update event");
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div className="event-info-container">
      {["title", "description", "date", "location", "price"].map((field) => (
        <div key={field} className="field-container">
          {isEditing ? (
            <input
              type={
                field === "date"
                  ? "date"
                  : field === "price"
                  ? "number"
                  : "text"
              }
              name={field}
              value={formData[field] || event[field]}
              onChange={handleInputChange}
              className="input-field"
            />
          ) : (
            <p className="field-value">{event[field] || "N/A"}</p>
          )}
        </div>
      ))}

      <button
        onClick={isEditing ? handleSave : () => setIsEditing(true)}
        className="edit-button"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default EventInfo;
