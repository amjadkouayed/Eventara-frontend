import React from "react";
import "../../styles/components/SearchBar.css"; // Import the CSS file

const SearchBar = () => {
  return (
    // {/* Search Bar */}
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <inputs
        type="text"
        placeholder="Search for an Event"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
