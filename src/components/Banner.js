/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Download, GeoAlt, Envelope, Telephone } from 'react-bootstrap-icons';

// Isolated Typewriter component so state changes don't re-render the Banner or Avatar
const TypewriterText = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(140);
  const toRotate = [
    "Senior React Native Developer",
    "Mobile Application Architect",
    "iOS & Android Specialist",
    "Cross-Platform Lead"
  ];
  const period = 1800;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(350);
    }
  };

  return <span className="wrap">{text || 'Senior React Native Developer'}</span>;
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
              <span>Open to Senior Mobile & Architecture Roles</span>
            </div>

            <h1 className="hero-title">
              Hi! I'm Rohit Kumar
              <br />
              <span className="txt-rotate">
                <TypewriterText />
              </span>
            </h1>

            <p className="hero-description">
              Senior React Native Developer with <strong>4+ years of experience</strong> architecting and shipping high-performance cross-platform mobile applications across FinTech, E-Commerce, EdTech, and IoT domains. Delivered <strong>20+ production apps</strong>, scaled live apps to <strong>50,000+ active users</strong>, and achieved <strong>35% crash reduction</strong> through Sentry profiling.
            </p>

            <div className="hero-meta-pills">
              <span className="meta-item">
                <GeoAlt size={14} className="me-1 meta-icon" /> Noida, Uttar Pradesh, India
              </span>
              <a href="mailto:rohitkumar0526946@gmail.com" className="meta-item">
                <Envelope size={14} className="me-1 meta-icon" /> rohitkumar0526946@gmail.com
              </a>
              <a href="tel:+919690243770" className="meta-item">
                <Telephone size={14} className="me-1 meta-icon" /> +91-9690243770
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
                download="Rohit-Kumar-Senior-React-Native-Developer.pdf"
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
                  src="/images/Rohit.jpeg"
                  alt="Rohit Kumar - Senior React Native Developer"
                  className="hero-avatar"
                  loading="eager"
                  decoding="sync"
                />
                <div className="experience-badge-float">
                  <span className="badge-number">4+</span>
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
              <h3 className="stat-num">4+</h3>
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
