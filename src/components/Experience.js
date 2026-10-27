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
            {/* Timeline Item 1: Current Role at CRM Landing Softwares */}
            <div className="experience-timeline-card">
              <div className="timeline-badge-icon">
                <Briefcase size={22} />
              </div>
              <div className="card-inner">
                <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                  <div>
                    <div className="company-tag">CRM Landing Softwares • Ajmer</div>
                    <h3 className="role-title">React Native Developer</h3>
                    <div className="promotion-pill">
                      <ArrowUpRightCircle size={14} className="me-1" />
                      <span>Current Organization • Mobile Engineering Lead</span>
                    </div>
                  </div>
                  <span className="duration-pill">Sep 2024 – Present</span>
                </div>

                <div className="experience-highlights">
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>Enterprise Mobile Architecture:</strong> Architecting and scaling cross-platform mobile solutions using React Native, TypeScript, and Redux Toolkit for CRM and business enterprise clients.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>Real-Time Synchronization:</strong> Developing dynamic mobile interfaces with real-time data sync, push notification pipelines via Firebase FCM, and resilient RESTful API caching.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>App Performance & Quality:</strong> Optimizing rendering performance, memory profiling, and ensuring 99%+ crash-free user sessions across Android & iOS devices.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>End-to-End Store Deployment:</strong> Managing release pipelines, build generation, and direct submissions to Google Play Console and Apple App Store Connect.
                    </div>
                  </div>
                </div>

                <div className="tech-stack-used mt-4">
                  <span className="stack-label">Current Stack:</span>
                  <span className="tech-badge">React Native</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Redux Toolkit</span>
                  <span className="tech-badge">TanStack Query</span>
                  <span className="tech-badge">Firebase FCM</span>
                  <span className="tech-badge">Google Sign-In</span>
                  <span className="tech-badge">REST APIs</span>
                  <span className="tech-badge">Play Console</span>
                  <span className="tech-badge">App Store Connect</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2: Full-Time Developer Role at Comfygen */}
            <div className="experience-timeline-card secondary-timeline">
              <div className="timeline-badge-icon secondary">
                <Briefcase size={20} />
              </div>
              <div className="card-inner">
                <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                  <div>
                    <div className="company-tag">Comfygen Technologies • Jaipur</div>
                    <h3 className="role-title">React Native Developer</h3>
                    <div className="promotion-pill">
                      <ArrowUpRightCircle size={14} className="me-1" />
                      <span>Promoted from Intern (Oct 2023) → Permanent Developer (Feb 2024)</span>
                    </div>
                  </div>
                  <span className="duration-pill secondary">Feb 2024 – Aug 2024</span>
                </div>

                <div className="experience-highlights">
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>20+ Production Apps:</strong> Collaborated within a cross-functional team to architect and ship 20+ production mobile apps across FinTech, E-Commerce, EdTech, and IoT domains.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>Performance & Crash Reduction:</strong> Reduced production crashes by <strong>~35%</strong> and improved speed by <strong>~25%</strong> through Sentry & Firebase Crashlytics monitoring and memory profiling.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>Live Streaming & Video Calling (ZEGOCLOUD):</strong> Integrated high-concurrency live streaming broadcast and 1-on-1 / group video & audio calling using ZEGOCLOUD RTC SDK with call invitation management and ultra-low latency feeds.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>Real-Time Systems & IoT:</strong> Engineered Socket.io order tracking, BLE communication protocols for smart toys, and OTA firmware update flows.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      <strong>Payments & Auth:</strong> Implemented Google Play Billing, Apple IAP, Razorpay gateway, and secure Google Sign-In & Biometric Auth.
                    </div>
                  </div>
                </div>

                <div className="tech-stack-used mt-4">
                  <span className="stack-label">Stack:</span>
                  <span className="tech-badge">React Native</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">ZEGOCLOUD</span>
                  <span className="tech-badge">Live Streaming</span>
                  <span className="tech-badge">Video Calling</span>
                  <span className="tech-badge">Socket.io</span>
                  <span className="tech-badge">BLE</span>
                  <span className="tech-badge">Sentry</span>
                  <span className="tech-badge">Crashlytics</span>
                  <span className="tech-badge">Google Play Billing</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 3: Internship Role at Comfygen */}
            <div className="experience-timeline-card secondary-timeline">
              <div className="timeline-badge-icon secondary">
                <Briefcase size={20} />
              </div>
              <div className="card-inner">
                <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
                  <div>
                    <div className="company-tag">Comfygen Technologies • Jaipur</div>
                    <h3 className="role-title">React Native Intern</h3>
                  </div>
                  <span className="duration-pill secondary">Oct 2023 – Jan 2024</span>
                </div>

                <div className="experience-highlights">
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      Developed and integrated responsive UI for multiple cross-platform screens, ensuring smooth navigation across iOS and Android.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      Implemented navigation architectures using React Navigation and integrated dynamic REST APIs with Axios.
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircleFill size={16} className="check-icon" />
                    <div>
                      Built reusable UI components and optimized rendering performance by minimizing unnecessary component re-renders.
                    </div>
                  </div>
                </div>

                <div className="tech-stack-used mt-4">
                  <span className="stack-label">Stack:</span>
                  <span className="tech-badge">React Native</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">React Navigation</span>
                  <span className="tech-badge">Axios REST APIs</span>
                  <span className="tech-badge">UI/UX</span>
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
                      <p className="award-issuer">Comfygen Technologies • May 2024</p>
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
