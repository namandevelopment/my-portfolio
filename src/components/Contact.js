import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GeoAlt, Envelope, Telephone, Linkedin, Github, Send } from "react-bootstrap-icons";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  // Formspree endpoint: Replace YOUR_FORM_ID with your Formspree form ID (or set REACT_APP_FORMSPREE_ID)
  const formspreeId = process.env.REACT_APP_FORMSPREE_ID || "YOUR_FORM_ID";
  const formspreeUrl = `https://formspree.io/f/${formspreeId}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: `${formDetails.firstName} ${formDetails.lastName}`.trim(),
          email: formDetails.email,
          phone: formDetails.phone,
          message: formDetails.message
        }),
      });

      if (response.ok) {
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Message sent successfully! Naman will get back to you soon.' });
        setButtonText("Sent Successfully");
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus({
          success: false,
          message: errorData?.errors?.[0]?.message || 'Please configure Formspree ID or contact directly via email.'
        });
        setButtonText("Try Again");
      }
    } catch (err) {
      setStatus({
        success: false,
        message: 'Network error. Please reach out directly to naman.development@gmail.com'
      });
      setButtonText("Try Again");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let’s Build Something Great</h2>
          <p className="section-description">
            Looking for a React Native Developer to architect or scale your mobile application? Feel free to reach out.
          </p>
        </div>

        <Row className="align-items-stretch g-4">
          <Col lg={5}>
            <div className="contact-info-card h-100">
              <h3 className="contact-card-title">Contact Information</h3>
              <p className="contact-card-desc">
                I’m open to mobile engineering roles, high-scale cross-platform consulting, and technical leadership opportunities.
              </p>

              <div className="contact-meta-list">
                <div className="contact-meta-item">
                  <div className="meta-icon-box">
                    <GeoAlt size={18} />
                  </div>
                  <div>
                    <span className="meta-label">Location</span>
                    <p className="meta-val">Ajmer, Rajasthan, India</p>
                  </div>
                </div>

                <div className="contact-meta-item">
                  <div className="meta-icon-box">
                    <Envelope size={18} />
                  </div>
                  <div>
                    <span className="meta-label">Email</span>
                    <a href="mailto:naman.development@gmail.com" className="meta-val link-val">
                      naman.development@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-meta-item">
                  <div className="meta-icon-box">
                    <Telephone size={18} />
                  </div>
                  <div>
                    <span className="meta-label">Phone</span>
                    <a href="tel:+919509531768" className="meta-val link-val">
                      +91-9509531768
                    </a>
                  </div>
                </div>

                <div className="contact-meta-item">
                  <div className="meta-icon-box">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span className="meta-label">LinkedIn</span>
                    <a href="https://www.linkedin.com/in/naman-saini11/" target="_blank" rel="noreferrer" className="meta-val link-val">
                      linkedin.com/in/naman-saini11
                    </a>
                  </div>
                </div>

                <div className="contact-meta-item">
                  <div className="meta-icon-box">
                    <Github size={18} />
                  </div>
                  <div>
                    <span className="meta-label">GitHub</span>
                    <a href="https://github.com/namandevelopment" target="_blank" rel="noreferrer" className="meta-val link-val">
                      github.com/namandevelopment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="contact-form-card h-100">
              <h3 className="contact-card-title mb-4">Send a Direct Message</h3>
              <form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col sm={6}>
                    <label className="form-label-custom">First Name</label>
                    <input
                      type="text"
                      className="form-control-custom"
                      required
                      value={formDetails.firstName}
                      placeholder="e.g. John"
                      onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    />
                  </Col>
                  <Col sm={6}>
                    <label className="form-label-custom">Last Name</label>
                    <input
                      type="text"
                      className="form-control-custom"
                      value={formDetails.lastName}
                      placeholder="e.g. Doe"
                      onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    />
                  </Col>
                  <Col sm={6}>
                    <label className="form-label-custom">Email Address</label>
                    <input
                      type="email"
                      className="form-control-custom"
                      required
                      value={formDetails.email}
                      placeholder="john@example.com"
                      onChange={(e) => onFormUpdate('email', e.target.value)}
                    />
                  </Col>
                  <Col sm={6}>
                    <label className="form-label-custom">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control-custom"
                      value={formDetails.phone}
                      placeholder="+91 9876543210"
                      onChange={(e) => onFormUpdate('phone', e.target.value)}
                    />
                  </Col>
                  <Col xs={12}>
                    <label className="form-label-custom">Your Message</label>
                    <textarea
                      rows="4"
                      className="form-control-custom"
                      required
                      value={formDetails.message}
                      placeholder="Tell me about your project, team, or opportunity..."
                      onChange={(e) => onFormUpdate('message', e.target.value)}
                    ></textarea>
                  </Col>
                  <Col xs={12}>
                    <button type="submit" className="submit-btn-glow">
                      <span>{buttonText}</span>
                      <Send size={16} className="ms-2" />
                    </button>
                  </Col>
                  {status.message && (
                    <Col xs={12}>
                      <div className={`status-alert ${status.success ? 'alert-success' : 'alert-danger'}`}>
                        {status.message}
                      </div>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
