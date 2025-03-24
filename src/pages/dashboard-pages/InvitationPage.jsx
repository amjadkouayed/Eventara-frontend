import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const InvitationPage = () => {
  const { event_id } = useParams(); // Get event ID from URL
  const [eventDetails, setEventDetails] = useState(null);
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch event details from backend
    const fetchEventInfo = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/events/${event_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch event details");

        const data = await response.json();
        setEventDetails(data);

        // Set default values
        setTitle(data.title);
        setInstructions(data.instructions || "");
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventInfo();
  }, [event_id]);

  if (!eventDetails) return <p>Loading event details...</p>;

  return (
    <div className="invitation-page">
      <h1>Customize Invitation Email</h1>

      {/* Editable Fields */}
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Instructions:</label>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />

      {/* Email Live Preview */}
      <div className="email-preview">
        <h2>{title}</h2>
        <p>
          <strong>Date:</strong> {eventDetails.date}
        </p>
        <p>
          <strong>Time:</strong> {eventDetails.time}
        </p>
        <p>
          <strong>Location:</strong> {eventDetails.location}
        </p>
        <p>{instructions}</p>

        {/* RSVP Buttons */}
        <button style={{ backgroundColor: "green", color: "white" }}>
          Attending
        </button>
        <button style={{ backgroundColor: "red", color: "white" }}>
          Not Attending
        </button>
      </div>
    </div>
  );
};

export default InvitationPage;
