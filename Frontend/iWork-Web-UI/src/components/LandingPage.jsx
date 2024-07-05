import React from "react";
import { Link } from "react-router-dom";
import landingPageImage from "../assests/Landing-Page.jpg";
import "./css/LandingPage.css"; // Import the CSS file

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <img
        className="landing-page-image"
        src={landingPageImage}
        alt="Landing"
      />

      <div className="landing-page-content">
        <p className="landing-page-title">Welcome to Our Platform</p>
        <p>Discover amazing opportunities. Sign up now!</p>
        <Link to="/signup">
          <button className="landing-page-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
