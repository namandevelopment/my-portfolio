/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Download, GeoAlt, Envelope, Telephone } from 'react-bootstrap-icons';

// Smooth sliding Role Rotator with blur and gradient transition
const RoleRotator = () => {
  const roles = [
    "React Native Developer",
    "Mobile Application Architect",
    "iOS & Android Specialist",
    "ZEGOCLOUD RTC & Live Streaming",
    "Cross-Platform Lead"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span className="role-rotator-wrapper">
      <span className={`role-rotator-text ${isAnimating ? "role-slide-out" : "role-slide-in"}`}>
        {roles[currentIndex]}
      </span>
      <span className="role-rotator-cursor" aria-hidden="true" />
    </span>
  );
};

export const Banner = () => {
  const resumeUrl = `${process.env.PUBLIC_URL || ''}/Resume.pdf`;

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Hero Content */}
          <Col xs={12} lg={7} className="hero-text-col">
            <div className="status-pill mb-3">
              <span className="status-dot"></span>
              <span>Open to Mobile & Architecture Roles</span>
            </div>

            <h1 className="hero-title">
              Hi! I'm <span className="hero-name-gradient">Naman Saini</span> <span className="wave-emoji" role="img" aria-label="Waving hand">👋</span>
              <br />
              <RoleRotator />
            </h1>

            <p className="hero-description">
              React Native Developer with <strong>2+ years of experience</strong> architecting and shipping high-performance cross-platform mobile applications across FinTech, E-Commerce, EdTech, and IoT domains. Delivered <strong>20+ production apps</strong>, scaled live apps to <strong>50,000+ active users</strong>, and achieved <strong>35% crash reduction</strong> through Sentry profiling.
            </p>

            <div className="hero-meta-pills">
              <span className="meta-item">
                <GeoAlt size={14} className="me-1 meta-icon" /> Ajmer, Rajasthan, India
              </span>
              <a href="mailto:naman.development@gmail.com" className="meta-item">
                <Envelope size={14} className="me-1 meta-icon" /> naman.development@gmail.com
              </a>
              <a href="tel:+919509531768" className="meta-item">
                <Telephone size={14} className="me-1 meta-icon" /> +91-9509531768
              </a>
            </div>

            <div className="hero-action-buttons">
              <a href="#projects" className="btn-primary-glow">
                <span>Explore Projects</span> <ArrowRightCircle size={20} className="ms-2" />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Naman-Saini-Resume.pdf"
                className="btn-secondary-glass"
              >
                <Download size={18} className="me-2" /> <span>Download Resume</span>
              </a>
            </div>
          </Col>

          {/* Right Column: Rock-Solid Avatar Presentation (Zero Blinking) */}
          <Col xs={12} lg={5} className="text-center mt-5 mt-lg-0 hero-photo-col">
            <div className="hero-image-wrapper">
              <div className="image-backdrop-glow"></div>
              <div className="avatar-frame">
                <img
                  src={`${process.env.PUBLIC_URL || ''}/images/namansaini.jpeg`}
                  alt="Naman Saini - React Native Developer"
                  className="hero-avatar"
                  loading="eager"
                  decoding="sync"
                />
                <div className="experience-badge-float">
                  <span className="badge-number">2+</span>
                  <span className="badge-label">Years Exp</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Impact Metrics Dashboard */}
        <Row className="hero-stats-row mt-5 g-3">
          <Col xs={6} md={4} lg={2} className="stat-col">
            <div className="stat-card">
              <h3 className="stat-num">2+</h3>
              <p className="stat-title">Years Experience</p>
            </div>
          </Col>
          <Col xs={6} md={4} lg={2} className="stat-col">
            <div className="stat-card">
              <h3 className="stat-num">20+</h3>
              <p className="stat-title">Production Apps</p>
            </div>
          </Col>
          <Col xs={6} md={4} lg={3} className="stat-col">
            <div className="stat-card">
              <h3 className="stat-num">50,000+</h3>
              <p className="stat-title">Active Users Scaled</p>
            </div>
          </Col>
          <Col xs={6} md={4} lg={2} className="stat-col">
            <div className="stat-card">
              <h3 className="stat-num">35%</h3>
              <p className="stat-title">Crash Reduction</p>
            </div>
          </Col>
          <Col xs={12} md={8} lg={3} className="stat-col">
            <div className="stat-card highlight-card">
              <h3 className="stat-num">99%</h3>
              <p className="stat-title">Crash-Free Sessions</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
