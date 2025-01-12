import React from "react";
import "./SearchBar.css"; // Import the CSS file

const SearchBar = () => {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search for an Event"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;