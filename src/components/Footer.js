import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github, Envelope, Telephone } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer-modern">
      <Container>
        <Row className="align-items-center py-4 g-3">
          <Col md={6} className="text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <div className="brand-badge me-2">RK</div>
              <span className="brand-name">ROHIT KUMAR</span>
            </div>
            <p className="footer-tagline mb-0">
              Senior React Native Developer • 4+ Years of Mobile Engineering Excellence
            </p>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <div className="footer-social-links mb-2">
              <a
                href="https://www.linkedin.com/in/rohit-kumar-19647a219/"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-btn"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Rohit0526946"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-btn"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:rohitkumar0526946@gmail.com"
                className="footer-icon-btn"
                title="Email"
              >
                <Envelope size={18} />
              </a>
              <a
                href="tel:+919690243770"
                className="footer-icon-btn"
                title="Phone"
              >
                <Telephone size={18} />
              </a>
            </div>
            <p className="footer-copyright mb-0">
              © {new Date().getFullYear()} Rohit Kumar. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
