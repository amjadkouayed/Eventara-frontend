import React from "react";
import logo from "../assets/eventify-logo.png";
import "../styles/landing-header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} className="logo"></img>
      </div>
      <nav className="nav-links">
        <a href="#features">Features</a>
        <a href="blog">Blog</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <div className="button-container">
        <button className="login-button" onClick={() => navigate("/login")}>
          Login
        </button>
        <button
          className="create-account-button"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>
      </div>
    </header>
  );
};

export default Header;
