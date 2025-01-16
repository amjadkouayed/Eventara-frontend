import React from "react";
import "../styles/landing-main.css";
import heroImage from "../assets/Hero-image.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Manage your events at ease</h1>
        <p className="hero-subtitle">
          one place to easily manage and organize your events with online
          invitations, vendors and budget managment
        </p>
        <button className="hero-button" onClick={() => navigate("/signup")}>
          get started for free
        </button>
      </div>
      <div className="hero-image-wrapper">
        <img src={heroImage} alt="hero imgae" className="hero-image" />
      </div>
    </section>
  );
};

export const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-content">
        <h2>Designed for everbody</h2>
        <p>
          We aim to empower everyone to effortlessly create and manage their
          events in one convenient platform. Whether you&apos;re an individual
          or a company, Eventify is here to assist you in organizing and setting
          up your events seamlessly.
        </p>
      </div>
    </section>
  );
};

const Main = () => {
  return <HeroSection />;
};

export default Main;
