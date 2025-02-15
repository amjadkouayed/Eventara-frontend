import React from "react";
import EventForm from "../components/events-page/EventForm";
import "../styles/pages/CreateEvent.css";

const CreateEvent = () => {
  return (
    <div className="create-event-page">
      <EventForm />
    </div>
  );
};

export default CreateEvent;
