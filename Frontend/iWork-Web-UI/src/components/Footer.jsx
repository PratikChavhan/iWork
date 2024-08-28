import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div class="footerContainer">
        <div class="socialIcons mb-3">
          <a
            href="https://www.linkedin.com/in/pratikchavhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-youtube"></i>
          </a>
        </div>
        <div class="footerNav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Sign in</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="footerBottom">
        <p>
          Copyright &copy;2024
          <span>
            <Link to="/" class="designer">
              iWork
            </Link>
          </span>
          . All rights reserved | Designed by
          <a
            href="https://github.com/PratikChavhan"
            class="designer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pratik
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
