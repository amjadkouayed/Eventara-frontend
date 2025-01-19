import React from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Sign up</h1>
        <form className="auth-form">
          <div className="inpit-group">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="auth-input"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="auth-input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="auth-input"
              placeholder="Create a password"
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <div className="auth-footer">
          <p>
            Already have an account?
            <button className="link-button" onClick={() => navigate("/login")}>
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
