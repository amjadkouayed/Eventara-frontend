import React from "react";
import "./SearchAndCreateNewEvent.css"; // Import the CSS file

const SearchAndCreateNewEvent = () => {
  return (<>
    <div className="SearchBar-CreateEventButton">
      {/* Search Bar */}
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search for an Event"
          className="search-input"
        />
      </div>

      <button className="create-event-button">
        <span className="create-event-icon">+</span>
        <span className="create-event-text">Create an Event</span>
      </button>
    </div>
  </>);
};

export default SearchAndCreateNewEvent;