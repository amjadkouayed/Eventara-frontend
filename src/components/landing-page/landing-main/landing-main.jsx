import React from "react";
import "./landing-main.css";
import heroImage from "../../../assets/hero-image.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const organizeIcon = <FontAwesomeIcon icon={faListCheck} />;
const manageIcon = <FontAwesomeIcon icon={faPeopleRoof} />;

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Simplify Your Event Management</h1>
        <p className="hero-subtitle">
          Your Ultimate Solution for Seamless Event Planning, Efficient
          Organization, and Unforgettable Experiences.
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

const FeatureBox = (props) => {
  return (
    <div className="feature">
      <div className="feature-icon">{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

FeatureBox.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-header">
        <h2>Designed for everbody</h2>
        <p>
          We aim to empower everyone to effortlessly create and manage their
          events in one convenient platform. Whether you&apos;re an individual
          or a company, Eventify is here to assist you in organizing and setting
          up your events seamlessly.
        </p>
      </div>
      <div className="feature-box-container">
        <FeatureBox
          icon={organizeIcon}
          title="Organize"
          description="Effortlessly organize your events in one place. Take complete control of invites, registration, and more with eventify"
        />
        <FeatureBox
          icon={manageIcon}
          title="Manage"
          description="Manage your guest list and there preferences, easily manage vendors and the event budgeting"
        />
      </div>
    </section>
  );
};

const Main = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
    </>
  );
};

export default Main;
