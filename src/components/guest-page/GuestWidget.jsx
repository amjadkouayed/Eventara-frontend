import React from "react";
import "./GuestWidget.css";
const GuestWidget = ({ guest, onDelete }) => {
  return (
    <div className="guest-widget">
      <div className="guest-info">
        <p>
          Name: {guest.first_name} {guest.last_name}
        </p>
        <p>Email: {guest.email}</p>
      </div>
      <div className="guest-status">
        <p>
          {guest.invited ? "Invited" : "Not Invited"} /{" "}
          {guest.attending ? "Attending" : "Not Attending"}
        </p>
      </div>
      <div className="guest-actions">
        <button className="delete-button" onClick={() => onDelete(guest.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default GuestWidget;
