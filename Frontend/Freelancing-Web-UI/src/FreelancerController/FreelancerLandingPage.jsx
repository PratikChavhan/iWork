import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import WorkCard from "./WorkCard";
import AddPortfolioForm from "./AddPortfolioForm";
import AllPortfolios from "./AllPortfolios";

const FreelancerLandingPage = () => {
  const [activeComponent, setActiveComponent] = useState("workCard");

  const handleButtonClick = (component) => {
    if (component === "back") {
      setActiveComponent("workCard");
    } else {
      setActiveComponent(component);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Welcome to Freelancer Landing Page</h2>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <Button
            variant="dark"
            className="me-2"
            onClick={() => handleButtonClick("addNewPortfolio")}
          >
            Add New Portfolio
          </Button>
          <Button
            variant="dark"
            className="me-2"
            onClick={() => handleButtonClick("myPortfolios")}
          >
            My Portfolios
          </Button>
          <Button variant="dark" onClick={() => handleButtonClick("back")}>
            Back
          </Button>
        </Col>
      </Row>
      {/* Render components based on activeComponent state */}
      {activeComponent === "workCard" && <WorkCard />}
      {activeComponent === "addNewPortfolio" && (
        <AddPortfolioForm
          handleButtonClick={() => handleButtonClick("myPortfolios")}
        />
      )}
      {activeComponent === "myPortfolios" && (
        <AllPortfolios />
      )}
    </Container>
  );
};

export default FreelancerLandingPage;