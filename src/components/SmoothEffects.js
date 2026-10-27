import { useState, useEffect } from "react";
import { ArrowUp } from "react-bootstrap-icons";

export const SmoothEffects = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    // 1. Scroll-to-top visibility
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 400) {
            setShowTopBtn(true);
          } else {
            setShowTopBtn(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. High-Performance IntersectionObserver for Scroll-Reveal
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealSelectors = [
      ".education-card",
      ".project-card-box",
      ".awards-card",
      ".contact-info-card",
      ".contact-form-card",
      ".stat-card",
      ".skill-item",
      ".experience-timeline-card",
      ".reveal-init"
    ];

    const targets = document.querySelectorAll(revealSelectors.join(", "));
    targets.forEach((el) => {
      // If already in viewport on initial load, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("reveal-visible");
      } else {
        el.classList.add("reveal-init");
        observer.observe(el);
      }
    });

    // 3. Interactive Cursor Spotlight on Cards
    const spotlightCards = document.querySelectorAll(
      ".education-card, .project-card-box, .awards-card, .contact-info-card, .contact-form-card, .card-inner, .stat-card"
    );

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    spotlightCards.forEach((card) => {
      card.classList.add("spotlight-card");
      card.addEventListener("mousemove", handleMouseMove, { passive: true });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      spotlightCards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top-btn ${showTopBtn ? "visible" : ""}`}
      onClick={scrollToTop}
      title="Back to Top"
      aria-label="Back to Top"
    >
      <ArrowUp size={20} />
    </button>
  );
};
