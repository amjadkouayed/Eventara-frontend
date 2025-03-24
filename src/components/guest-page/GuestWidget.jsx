import React from "react";
import "./GuestWidget.css";
const GuestWidget = ({ guest, onInvite, onDelete }) => {
  const [isInviting, setIsInviting] = useState(false);

  const handleInvite = async () => {
    setIsInviting(true);
    await onInvite(guest.id);
    setIsInviting(false);
  };

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
        <button
          className="invite-button"
          onClick={handleInvite}
          disabled={isInviting || guest.invited}
          style={{
            background: guest.invited ? "#ccc" : "blue",
            color: "white",
          }}
        >
          {guest.invited ? "Invited" : isInviting ? "Inviting..." : "Invite"}
        </button>
        <button className="delete-button" onClick={() => onDelete(guest.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default GuestWidget;
