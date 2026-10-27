import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    {
      id: "mobile",
      title: "Mobile & Core",
      skills: [
        { name: "React Native (CLI & Expo)", tag: "Expert", desc: "Native modules, cross-platform architecture" },
        { name: "TypeScript", tag: "Advanced", desc: "Type-safe robust application development" },
        { name: "JavaScript (ES6+)", tag: "Expert", desc: "Modern syntax, async patterns, event loops" },
        { name: "iOS Development", tag: "Advanced", desc: "Xcode, CocoaPods, Swift bridges, provisioning" },
        { name: "Android Development", tag: "Advanced", desc: "Android Studio, Gradle, Kotlin/Java interop" },
        { name: "Native Modules", tag: "Advanced", desc: "Custom bridges for hardware, BLE, and security" },
      ]
    },
    {
      id: "state",
      title: "State & Data Management",
      skills: [
        { name: "Redux Toolkit / Thunk", tag: "Expert", desc: "Predictable scalable global state orchestration" },
        { name: "Zustand", tag: "Advanced", desc: "Lightweight, un-opinionated reactive state" },
        { name: "TanStack Query", tag: "Expert", desc: "Server-state caching, deduping & synchronization" },
        { name: "RESTful APIs & Axios", tag: "Expert", desc: "Retry policies, interceptors, offline caching" },
        { name: "Context API", tag: "Advanced", desc: "Scoped theme, auth, and session distribution" },
      ]
    },
    {
      id: "connectivity",
      title: "Real-Time, Media & Cloud",
      skills: [
        { name: "ZEGOCLOUD / Live Streaming", tag: "Expert", desc: "Interactive live streaming broadcast, host-audience roles & low-latency feeds" },
        { name: "Video & Audio Calling", tag: "Production", desc: "1-on-1 and group video/audio calling with ZEGOCLOUD RTC SDK & call invites" },
        { name: "Socket.io / WebSockets", tag: "Expert", desc: "Real-time order tracking & bi-directional chat pipelines" },
        { name: "BLE (Bluetooth Low Energy)", tag: "Specialized", desc: "Device discovery, characteristics, GATT, Wi-Fi sync" },
        { name: "Firebase Cloud Messaging (FCM)", tag: "Expert", desc: "High-volume push notifications & deep linking" },
        { name: "Over-The-Air (OTA) Updates", tag: "Advanced", desc: "Seamless code push & runtime hotfixes" },
        { name: "Deep Linking", tag: "Advanced", desc: "Universal links, custom URL schemes, navigation" },
      ]
    },
    {
      id: "payments",
      title: "Payments, Wallets & Security",
      skills: [
        { name: "Google Play Billing", tag: "Production", desc: "In-app purchases, recurring subscriptions" },
        { name: "Apple In-App Purchases (IAP)", tag: "Production", desc: "StoreKit integrations, receipt validation" },
        { name: "RevenueCat", tag: "Advanced", desc: "Cross-platform subscription management" },
        { name: "Razorpay Integration", tag: "Production", desc: "Complete checkout & payment webhook flow" },
        { name: "Web3 Crypto Wallets", tag: "Specialized", desc: "Non-custodial wallets, seed phrase, gas estimation" },
        { name: "Google Sign-In & Social Auth", tag: "Production", desc: "OAuth 2.0, Firebase Auth, Apple Sign-In & session security" },
        { name: "Biometric Auth & Keychain", tag: "Production", desc: "Face ID, Touch ID, Keystore secure enclave" },
      ]
    },
    {
      id: "devops",
      title: "Build, Release & Quality",
      skills: [
        { name: "Sentry Performance Profiling", tag: "Expert", desc: "-35% production crashes, 99% crash-free sessions" },
        { name: "Firebase Crashlytics & Analytics", tag: "Production", desc: "Real-time crash reporting, ANR tracking & event logging" },
        { name: "Google Play Console", tag: "Production", desc: "AAB bundles, internal/closed/production tracks" },
        { name: "App Store Connect", tag: "Production", desc: "TestFlight distribution, certificates, compliance" },
        { name: "Git, GitHub & Code Reviews", tag: "Team Lead", desc: "CI/CD branching models, mentoring juniors" },
        { name: "Agile, Scrum & JIRA", tag: "Team Lead", desc: "Sprint planning, story estimation, delivery tracking" },
        { name: "AI & LLM Integration", tag: "Emerging", desc: "Exploring on-device AI & AI-assisted app features" }
      ]
    }
  ];

  const filteredCategories = activeTab === "all"
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section className="skill" id="skills">
      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Technical Proficiency</span>
          <h2 className="section-title">Core Skills & Architecture</h2>
          <p className="section-description">
            Comprehensive skill set honed across 2+ years of building production-grade, enterprise-scale mobile applications.
          </p>

          <div className="skill-filter-tabs mt-4">
            <button
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Skills
            </button>
            <button
              className={`filter-btn ${activeTab === 'mobile' ? 'active' : ''}`}
              onClick={() => setActiveTab('mobile')}
            >
              Mobile & Core
            </button>
            <button
              className={`filter-btn ${activeTab === 'state' ? 'active' : ''}`}
              onClick={() => setActiveTab('state')}
            >
              State & API
            </button>
            <button
              className={`filter-btn ${activeTab === 'connectivity' ? 'active' : ''}`}
              onClick={() => setActiveTab('connectivity')}
            >
              Real-Time & BLE
            </button>
            <button
              className={`filter-btn ${activeTab === 'payments' ? 'active' : ''}`}
              onClick={() => setActiveTab('payments')}
            >
              Payments & Security
            </button>
            <button
              className={`filter-btn ${activeTab === 'devops' ? 'active' : ''}`}
              onClick={() => setActiveTab('devops')}
            >
              DevOps & Quality
            </button>
          </div>
        </div>

        <Row className="g-4">
          {filteredCategories.map((category) => (
            <Col xs={12} lg={activeTab === 'all' ? 6 : 12} key={category.id}>
              <div className="skill-category-card">
                <h4 className="category-header">
                  <span className="category-indicator"></span>
                  {category.title}
                </h4>
                <div className="skills-grid">
                  {category.skills.map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`skill-tag tag-${skill.tag.toLowerCase().replace(/[^a-z]/g, '')}`}>
                          {skill.tag}
                        </span>
                      </div>
                      <p className="skill-desc">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
