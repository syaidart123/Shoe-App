import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../../assets/hero3.png";

const HeroSection = () => {
  return (
    <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
      <Container>
        <Row className="header-box d-flex align-items-center pt-lg-5">
          <Col lg="6">
            <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              Gaya yang Berbicara, Langkah yang Menginspirasi
            </h1>
            <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vero
              libero corporis accusantium. Iste, corporis?
            </p>
            <button
              className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
              onClick={() => Navigate("/kelas")}
            >
              Get Started
            </button>
          </Col>
          <Col lg="6" className="pt-lg-0 pt-5">
            <img
              src={HeroImage}
              alt="HeroImg"
              className="animate__animated animate__fadeInUp"
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeroSection;
