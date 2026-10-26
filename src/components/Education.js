import { Container, Row, Col } from "react-bootstrap";
import { Mortarboard, Award, Calendar3, GeoAlt } from "react-bootstrap-icons";

export const Education = () => {
  const degrees = [
    {
      degree: "Bachelor of Science (B.Sc.) in Mathematics",
      institution: "MDS University, Ajmer",
      duration: "07/2015 – 06/2018",
      score: "76.78%",
      scoreLabel: "Aggregate Score",
      description: "Rigorous curriculum in Higher Mathematics, Numerical Analysis, and Statistical Methods, along with Computer Programming fundamentals in C++ and Object-Oriented Programming (OOP) concepts."
    },
    {
      degree: "Generative AI & LLM Integration for Mobile Apps",
      institution: "DeepLearning.AI & Udemy",
      duration: "2023 – 2024",
      score: "Certified",
      scoreLabel: "Credential",
      description: "Practical engineering in embedding Large Language Models (OpenAI GPT-4, Google Gemini APIs) into React Native apps, streaming conversational UI, prompt design, and AI-assisted mobile features."
    },
    {
      degree: "Advanced React Native & Mobile Architecture",
      institution: "Udemy Professional Certification",
      duration: "2022 – 2023",
      score: "Certified",
      scoreLabel: "Credential",
      description: "Deep dive into React Native core internals, custom native bridges, high-speed fluid animations (Reanimated 3), state management with Zustand & Redux Toolkit, and performance profiling."
    },
    {
      degree: "Mobile Full-Stack & Cloud Architecture",
      institution: "Udemy Professional Track",
      duration: "2023 – 2024",
      score: "Certified",
      scoreLabel: "Credential",
      description: "Mastered end-to-end mobile backend systems: Firebase Suite, REST & GraphQL APIs, WebSockets (real-time chat), payment gateways (Razorpay, Apple IAP), and CI/CD pipelines."
    }
  ];

  return (
    <section className="education-section" id="education">
      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Education & Learning</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-description">
            Strong foundational background in mathematics and computer science, backed by specialized industry certifications in React Native and Generative AI.
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

