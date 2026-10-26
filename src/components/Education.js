import { Container, Row, Col } from "react-bootstrap";
import { Mortarboard, Award, Calendar3, GeoAlt } from "react-bootstrap-icons";

export const Education = () => {
  const degrees = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "IIMT University, Meerut",
      duration: "07/2022 – 06/2024",
      score: "82.98%",
      scoreLabel: "Aggregate Score",
      description: "Advanced coursework in Software Engineering, Mobile Computing, Distributed Systems, Cloud Architecture, and Data Structures & Algorithms."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "IIMT University, Meerut",
      duration: "07/2018 – 06/2021",
      score: "76.78%",
      scoreLabel: "Aggregate Score",
      description: "Foundational computer science curriculum covering Object-Oriented Programming (OOP), Database Management Systems (DBMS), Web Technologies, and Computer Networks."
    }
  ];

  return (
    <section className="education-section" id="education">
      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Academic Background</span>
          <h2 className="section-title">Education & Degrees</h2>
          <p className="section-description">
            Strong academic foundation in computer science and software development from IIMT University.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Row className="g-4">
              {degrees.map((item, index) => (
                <Col md={6} key={index}>
                  <div className="education-card">
                    <div className="edu-icon-wrap">
                      <Mortarboard size={28} />
                    </div>
                    <div className="edu-content">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h4 className="edu-degree">{item.degree}</h4>
                        <span className="edu-score-badge">
                          <Award size={14} className="me-1" />
                          {item.score}
                        </span>
                      </div>
                      <h5 className="edu-institution">
                        <GeoAlt size={14} className="me-1" />
                        {item.institution}
                      </h5>
                      <p className="edu-duration">
                        <Calendar3 size={13} className="me-1" />
                        {item.duration}
                      </p>
                      <p className="edu-desc">{item.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

