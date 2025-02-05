import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/EventBoard.css';
import SearchBar from '../components/SearchBar'

const EventBoard = () => {
  return (
    <div className="event-board-container">
    <div className='searchbar-and-create-event-button'>  
        <SearchBar />
        <Link to="/dashboard/create-event" className="create-event-button">
            <span className="create-event-icon">+</span>
            <span className="create-event-text">Create an Event</span>
        </Link>
    </div>
      <p>You have currently no events created.</p>
      <Link to="/dashboard/create-event" className='start-here-link'>Start here →</Link>
      
    </div>
  );
};

export default EventBoard;