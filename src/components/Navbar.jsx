import React from "react";
import "./Navbar.css"; // Import the CSS file

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