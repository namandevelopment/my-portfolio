import { Container, Row, Col } from "react-bootstrap";
import { Award, CheckCircleFill, Briefcase, Trophy, ArrowUpRightCircle } from "react-bootstrap-icons";

export const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Career Path</span>
          <h2 className="section-title">Work Experience & Leadership</h2>
          <p className="section-description">
            Track record of architecting scalable mobile solutions, reducing crashes, and leading cross-functional engineering teams.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            {/* Timeline Item 1: Senior Role */}
            <div className="experience-timeline-card">
              <div className="timeline-badge-icon">
                <Briefcase size={22} />
              </div>
              <div className="card-inner">
                <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                  <div>
                    <div className="company-tag">Comfygen Technologies • Jaipur</div>
                    <h3 className="role-title">React Native Developer</h3>
                    <div className="promotion-pill">
                      <ArrowUpRightCircle size={14} className="me-1" />
                      <span>Promoted from React Native Intern (Apr 2023) → React Native Developer (Apr 2024)</span>
                    </div>
                  </div>
                  <span className="duration-pill">05/2023 – Present</span>
                </div>

                <div className="experience-highlights">
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>20+ Production Applications:</strong> Collaborated within a cross-functional engineering team to architect and ship 20+ production React Native apps across FinTech, E-Commerce, EdTech, and IoT domains.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>Modern Architecture:</strong> Architected scalable B2B/B2C mobile applications using React Native, TypeScript, Redux Toolkit, Zustand, and TanStack Query, drastically improving API response handling and state consistency.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>Performance Optimization:</strong> Reduced production app crashes by <strong>~35%</strong> and improved app speed by <strong>~25%</strong> through Sentry monitoring, memory profiling, and frame rate optimization.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>Real-Time Systems & IoT:</strong> Built real-time order tracking pipelines using Socket.io and Firebase Cloud Messaging (FCM); developed BLE communication protocols for IoT smart toys and implemented OTA updates.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>Payment & Subscriptions:</strong> Implemented end-to-end payment and monetization flows using Google Play Billing, Apple In-App Purchases (IAP), RevenueCat, and Razorpay.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>Mentorship & Delivery:</strong> Conducted rigorous code reviews and mentored junior developers, standardizing Git/Agile workflows and improving sprint delivery consistency by an estimated <strong>20%</strong>.
                    </div>
                  </div>
                </div>

                <div className="tech-stack-used mt-4">
                  <span className="stack-label">Key Stack:</span>
                  <span className="tech-badge">React Native</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Redux Toolkit</span>
                  <span className="tech-badge">Zustand</span>
                  <span className="tech-badge">TanStack Query</span>
                  <span className="tech-badge">Socket.io</span>
                  <span className="tech-badge">BLE</span>
                  <span className="tech-badge">Sentry</span>
                  <span className="tech-badge">Google Play Billing</span>
                  <span className="tech-badge">Apple IAP</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2: Earlier Role */}
            <div className="experience-timeline-card secondary-timeline">
              <div className="timeline-badge-icon secondary">
                <Briefcase size={20} />
              </div>
              <div className="card-inner">
                <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                  <div>
                    <div className="company-tag">Comfygen Technologies • Jaipur</div>
                    <h3 className="role-title">React Native Developer</h3>
                  </div>
                  <span className="duration-pill secondary">04/2022 – 05/2023</span>
                </div>

                <div className="experience-highlights">
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      Contributed to the core development and maintenance of cross-platform mobile apps using React Native and JavaScript.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      Implemented features including video playback controls, autoplay on scroll, and push notification services via APNs and FCM.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      Integrated secure Razorpay checkout flows and conducted device testing across iOS and Android emulators and physical hardware.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications and Awards Card */}
            <div className="awards-card mt-4">
              <div className="d-flex align-items-center mb-3">
                <Trophy size={26} className="text-warning me-2" />
                <h4 className="awards-title mb-0">Certifications & Honors</h4>
              </div>
              <Row className="g-3">
                <Col md={6}>
                  <div className="award-item">
                    <Award size={22} className="award-icon" />
                    <div>
                      <h5 className="award-name">Certificate of Appreciation</h5>
                      <p className="award-issuer">Comfygen Private Limited • May 2024</p>
                      <p className="award-desc">Recognized for invaluable contribution and high-impact engineering delivery to the organization.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="award-item">
                    <Award size={22} className="award-icon" />
                    <div>
                      <h5 className="award-name">Team Excellence Award</h5>
                      <p className="award-issuer">Mobile App Development Team • Comfygen</p>
                      <p className="award-desc">Awarded for outstanding technical dedication, cross-functional collaboration, and high delivery quality.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
