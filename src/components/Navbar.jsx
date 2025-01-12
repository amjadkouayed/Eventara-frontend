import React from "react";
import "./NavBar.css"; // Import the CSS file

// Declaring Navbar and assign to a function
const Navbar = () => {
    return (
        <div className="navbar">

            <div className="logo">Logo</div>

            <div className="right-section">
                <button className="icon-button">🔔</button>
                <div className="account">Pirapat Thanasupakorn ▼</div>
            </div>

        </div>
  );
};

export default Navbar;