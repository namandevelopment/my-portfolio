import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("flagship");

  // Flagship Projects directly from Senior React Native Resume
  const flagshipProjects = [
    {
      title: "DIARCHGO",
      subtitle: "Grocery Delivery Platform (Blinkit-Style)",
      scale: "50,000+ Active Users • Live in Patna",
      featured: true,
      description: "High-scale on-demand grocery delivery ecosystem featuring instant catalog search, dynamic cart mechanics, and real-time delivery tracking.",
      bullets: [
        "Architected with React Native & TypeScript with Socket.io-based real-time order and rider tracking.",
        "Engineered end-to-end e-commerce flow with geo-location-based pricing, Firebase FCM push notifications, and payment gateway.",
        "Implemented resilient network retry logic and deep linking to handle edge cases, sustaining a 99% crash-free session rate via Sentry."
      ],
      tags: ["React Native", "TypeScript", "Socket.io", "Firebase FCM", "Sentry", "Geolocation", "Payment Gateway"],
      url: "https://play.google.com/store/apps/details?id=com.diarchgouser",
      urlLabel: "Production Case Study"
    },
    {
      title: "Dara Doll Buddy App",
      subtitle: "IoT Smart Toy Companion (BLE Architecture)",
      scale: "Live on Play Store & App Store",
      featured: true,
      description: "Cutting-edge BLE companion application communicating with the 'Dara Doll' children's smart toy via custom native modules.",
      bullets: [
        "Built low-level BLE device discovery, filtering by device name, and reliable GATT service/characteristic handshake.",
        "Subscribed to characteristic notifications to monitor live device status: battery health, connection state, firmware version, and playback.",
        "Engineered Wi-Fi provisioning (home network sync via BLE write commands) and paginated story-playback token pipeline.",
        "Implemented over-the-air (OTA) firmware-update detection and update flow through native BLE modules."
      ],
      tags: ["React Native", "BLE (Bluetooth Low Energy)", "Native Modules", "Wi-Fi Provisioning", "OTA Firmware", "iOS & Android"],
      url: "https://apps.apple.com",
      urlLabel: "Live on Stores"
    },
    {
      title: "GCN Wallet",
      subtitle: "Decentralized Crypto Wallet (MetaMask-Style)",
      scale: "15,000+ Users • Android & iOS",
      featured: true,
      description: "Non-custodial decentralized cryptocurrency wallet supporting multiple testnet and mainnet blockchain networks.",
      bullets: [
        "Built secure wallet creation/import via 12-word seed phrase, real-time gas fee estimation, and on-chain transaction signing.",
        "Secured wallet access with multi-layer Biometric Authentication (Face ID / Fingerprint) and custom pattern lock.",
        "Encrypted and stored sensitive private keys inside hardware-backed device Keychain and Keystore."
      ],
      tags: ["React Native", "Web3 / Blockchain", "Biometric Auth", "Face ID", "Keychain/Keystore", "Crypto Transactions"],
      url: "https://apps.apple.com/in/app/vunecoin/id6479356531",
      urlLabel: "View Wallet App"
    },
    {
      title: "Zat Pat",
      subtitle: "Multi-Vertical On-Demand Delivery App",
      scale: "Grocery, Restaurant & Delivery Modules",
      featured: true,
      description: "Swiggy-style multi-service delivery platform with dedicated apps and role-based workflows for customers, merchants, and delivery partners.",
      bullets: [
        "Implemented high-accuracy real-time location tracking using Google Maps SDK with custom UI components for smooth live tracking.",
        "Integrated seamless cart, order checkout, and Razorpay payment gateway with automatic payment reconciliation.",
        "Authored comprehensive test cases across core checkout, rider dispatch, and order fulfillment flows."
      ],
      tags: ["React Native", "Google Maps SDK", "Razorpay", "Multi-Role Workflows", "Order Tracking"],
      url: "https://play.google.com/store/apps/details?id=com.zatpatt.user",
      urlLabel: "Explore App"
    }
  ];

  // Additional live client apps shipped to App Store & Play Store
  const publishedApps = [
    {
      title: "First Screen By Orkids",
      subtitle: "Educational & Assessment App",
      scale: "Live on Apple App Store",
      description: "Comprehensive special education assessment tool empowering parents and educators to track student developmental milestones.",
      tags: ["React Native", "iOS", "Education", "Interactive Assessments"],
      url: "https://apps.apple.com/in/app/first-screen-by-orkids/id6503728775",
      urlLabel: "App Store Link"
    },
    {
      title: "Telgros",
      subtitle: "B2B E-Commerce Marketplace",
      scale: "Live on Google Play Store",
      description: "Robust retail ordering platform connecting wholesale distributors and retail shop owners with seamless ordering.",
      tags: ["React Native", "Android", "B2B E-Commerce", "Catalog Sync"],
      url: "https://play.google.com/store/apps/details?id=com.app.telgros&hl=en",
      urlLabel: "Play Store Link"
    },
    {
      title: "Eyision",
      subtitle: "Interactive Travel & Social App",
      scale: "Live on Apple App Store",
      description: "Dynamic community platform for travel enthusiasts to discover events, share journeys, and connect with fellow explorers.",
      tags: ["React Native", "iOS", "Social Network", "Media Feed"],
      url: "https://play.google.com/store/search?q=eyision&c=apps&hl=en",
      urlLabel: "App Store Link"
    },
    {
      title: "Stars Tracker",
      subtitle: "Astronomy & Stargazing Utility",
      scale: "Live on Apple App Store",
      description: "Precise celestial positioning application tracking stars, constellations, and planetary trajectories in real-time.",
      tags: ["React Native", "iOS", "Sensors", "Celestial Math"],
      url: "https://apps.apple.com/in/app/stars-tracker-app/id6742403091",
      urlLabel: "App Store Link"
    },
    {
      title: "Gmask",
      subtitle: "Lifestyle & Identity Security",
      scale: "Live on Apple App Store",
      description: "Privacy and personal security application providing identity masking and secure communications.",
      tags: ["React Native", "iOS", "Security", "Encryption"],
      url: "https://apps.apple.com/in/app/gmask/id6475034759",
      urlLabel: "App Store Link"
    },
    {
      title: "Singhal Jain & Co.",
      subtitle: "Enterprise Financial Services App",
      scale: "Live on Apple App Store",
      description: "Corporate financial consulting and compliance mobile utility for client audits, tax filing, and documentation.",
      tags: ["React Native", "FinTech", "Document Management", "Client Portal"],
      url: "https://apps.apple.com/in/app/singhal-jain-co/id1623310438",
      urlLabel: "App Store Link"
    },
    {
      title: "UR PHYSIO",
      subtitle: "Healthcare & Certified Tele-Physio",
      scale: "Live on Google Play Store",
      description: "Telemedicine platform connecting patients with certified physiotherapists for appointments and guided therapy sessions.",
      tags: ["React Native", "Healthcare", "Doctor Booking", "Tele-health"],
      url: "https://play.google.com/store/apps/details?id=com.jaipurphysio&hl=en_IN",
      urlLabel: "Play Store Link"
    }
  ];

  return (
    <section className="project" id="projects">
      {/* dddddddddd */}
      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Portfolio Showcase</span>
          <h2 className="section-title">Featured Production Applications</h2>
          <p className="section-description">
            High-scale mobile apps shipped to millions of downloads across Google Play Store and Apple App Store.
          </p>

          <div className="project-category-tabs mt-4">
            <button
              className={`project-tab-btn ${activeTab === 'flagship' ? 'active' : ''}`}
              onClick={() => setActiveTab('flagship')}
            >
              ⭐ Flagship Case Studies (From Resume)
            </button>
            <button
              className={`project-tab-btn ${activeTab === 'published' ? 'active' : ''}`}
              onClick={() => setActiveTab('published')}
            >
              📱 Published Store Applications
            </button>
          </div>
        </div>

        {activeTab === 'flagship' && (
          <Row className="g-4">
            {flagshipProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </Row>
        )}

        {activeTab === 'published' && (
          <Row className="g-4">
            {publishedApps.map((project, idx) => (
              <ProjectCard key={idx} {...project} featured={false} />
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};
