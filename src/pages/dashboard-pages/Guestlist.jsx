import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GuestWidget from "../../components/guest-page/GuestWidget";
import "../../styles/pages/Guestlist.css";

const Guestlist = () => {
  const { event_id } = useParams();
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newGuest, setNewGuest] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/events/${event_id}/guests`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch guests");
        }

        const data = await response.json();
        console.log(data);
        setGuests(data);
      } catch (error) {
        console.error("Failed to fetch guests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, [event_id, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGuest({ ...newGuest, [name]: value });
  };

  const handleAddGuest = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/events/${event_id}/guests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(newGuest),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add guest");
      }

      const addedGuest = await response.json();
      setGuests([...guests, addedGuest]);
      setShowForm(false);
      setNewGuest({ firstName: "", lastName: "", email: "" });
    } catch (error) {
      console.error("Failed to add guest:", error);
    }
  };

  const deleteGuest = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/events/${event_id}/guests/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete guest");
      }

      setGuests(guests.filter((guest) => guest.id !== id));
    } catch (error) {
      console.error("Failed to delete guest:", error);
    }
  };

  const inviteGuest = async (guestId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/invite-guest/${guestId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ event_id }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send invitation");
      }

      setGuests((prevGuests) =>
        prevGuests.map((guest) =>
          guest.id === guestId ? { ...guest, invited: true } : guest
        )
      );
      alert("Invitation sent!");
    } catch (error) {
      console.error("Error inviting guest:", error);
      alert("Failed to send invitation.");
    }
  };

  return (
    <div className="guest-list">
      <button onClick={() => setShowForm(!showForm)}>Add Guest</button>
      {showForm && (
        <form onSubmit={handleAddGuest} className="guest-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newGuest.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newGuest.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newGuest.email}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {loading ? (
        <p>Loading guests...</p>
      ) : (
        guests.map((guest) => (
          <GuestWidget
            key={guest.id}
            guest={guest}
            onInvite={inviteGuest}
            onDelete={deleteGuest}
          />
        ))
      )}
    </div>
  );
};

export default Guestlist;
