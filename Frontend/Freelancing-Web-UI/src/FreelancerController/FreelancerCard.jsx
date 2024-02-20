import React, { useState } from "react";
import "./freelancerCards.css";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import defaultUser from "../assests/dummyUser.png";

const ShinyTag = ({ skill }) => {
  return (
    <div className="shiny-tag">
      <span>{skill}</span>
    </div>
  );
};

const FreelancerCard = ({
  id,
  title,
  description,
  image,
  hourlyCharges,
  skill,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [contactDetails, setContactDetails] = useState(null);

  const fetchContactDetails = (id) => {
    axios
      .get(`http://localhost:9091/freelancing/api/Portfolio/user/${id}`)
      .then((response) => {
        setContactDetails(response.data);
        setShowModal(true);
      })
      .catch((error) => {
        console.log("Error fetching contact details:", error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleImageError = (event) => {
    event.target.src = defaultUser;
  };

  return (
    <div className="freelancer-card">
      <img
        src={image}
        alt={title}
        className="card-image"
        onError={handleImageError}
      />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-hourly-charges">${hourlyCharges}/hour</p>
        <div className="card-skills">
          <ShinyTag skill={skill} />
        </div>
        <div className="card-buttons">
          <button
            className="contact-button"
            onClick={() => fetchContactDetails(id)}
          >
            Contact
          </button>
        </div>
      </div>
      <Modal open={showModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white", // Use backgroundColor instead of bgcolor
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="div" gutterBottom>
            Contact Details
          </Typography>
          {contactDetails && (
            <div>
              <p>Name: {contactDetails.name}</p>
              <p>Email: {contactDetails.email}</p>
              <p>Mobile Number: {contactDetails.mobileNumber}</p>
            </div>
          )}
          <Button onClick={handleCloseModal}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default FreelancerCard;
