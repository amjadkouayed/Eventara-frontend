import React from "react";
import logo from "../assets/images/eventify-logo.png"
import "../styles/components/Header.css"; // Import the CSS file

// Declaring Navbar and assign to a function
const Header = () => {
    return (
        <div className="navbar">

            <img src={logo} alt="Eventify Logo" className="logo" />
            

            <div className="right-section">
                <div className="noti-icon-bg">
                    <button className="noti-icon">🔔</button>
                </div>
                <div className="account-section"> 
                    <span className="username-abbr">P</span>
                    <span className="username">Pirapat Thanasupakorn</span>
                    <span className="dropdown-icon">▼</span>
                </div>
            </div>

        </div>
  );
};

export default Header;