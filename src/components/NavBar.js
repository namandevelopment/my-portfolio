/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check if scrolled to bottom of the page
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveLink("connect");
        return;
      }

      if (window.scrollY < 80) {
        setActiveLink("home");
        return;
      }

      const sections = ["home", "experience", "projects", "skills", "education", "connect"];
      let currentSection = "home";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180) {
            currentSection = sectionId;
          }
        }
      }

      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollState();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    setActiveLink(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  const resumeUrl = `${process.env.PUBLIC_URL || ''}/Resume.pdf`;

  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center" onClick={(e) => handleNavClick(e, 'home')}>
            <div className="brand-badge me-2">NS</div>
            <div className="brand-text">
              <span className="brand-name">NAMAN SAINI</span>
              <span className="brand-subtitle"> React Native Developer</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" activeKey={activeLink}>
              <Nav.Link
                href="#home"
                eventKey="home"
                active={activeLink === 'home'}
                className="navbar-link"
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#experience"
                eventKey="experience"
                active={activeLink === 'experience'}
                className="navbar-link"
                onClick={(e) => handleNavClick(e, 'experience')}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#projects"
                eventKey="projects"
                active={activeLink === 'projects'}
                className="navbar-link"
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#skills"
                eventKey="skills"
                active={activeLink === 'skills'}
                className="navbar-link"
                onClick={(e) => handleNavClick(e, 'skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#education"
                eventKey="education"
                active={activeLink === 'education'}
                className="navbar-link"
                onClick={(e) => handleNavClick(e, 'education')}
              >
                Education
              </Nav.Link>
              <Nav.Link
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-link resume-nav-link"
              >
                Resume ↗
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/naman-saini11/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/namandevelopment"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="github-icon"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Naman-Saini-Resume.pdf"
                  className="download-link"
                  title="Download / View Resume (PDF)"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-cloud-download" viewBox="0 0 16 16">
                    <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383" />
                    <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z" />
                  </svg>
                </a>
              </div>
              <HashLink to='#connect' onClick={(e) => handleNavClick(e, 'connect')}>
                <button className={activeLink === 'connect' ? 'vvd active' : 'vvd'}><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
