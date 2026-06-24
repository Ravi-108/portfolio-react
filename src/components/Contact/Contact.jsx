import React, { useState, useEffect } from "react";
import "./Contact.css";
import Reveal from "../Reveal/Reveal";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [num1] = useState(Math.floor(Math.random() * 8) + 1);
  const [num2] = useState(Math.floor(Math.random() * 8) + 1);
  const [check, setCheck] = useState("");
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    if (parseInt(check) !== num1 + num2) {
      setStatus("Human verification failed. Please try again.");
      return;
    }
    emailjs
      .send("service_56erm9k", "template_blh98d9", form, "ptHnisfkYmd_n8NYh")
      .then(() => {
        setStatus("");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2500);
        setForm({ name: "", email: "", message: "" });
        setCheck("");
      })
      .catch(() => setStatus("Something went wrong. Please try again."));
  };

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX / 60, y: e.clientY / 60 });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Ravi-108", label: "GitHub", color: "#fff" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ravi-rai-a2955a275/", label: "LinkedIn", color: "#0A66C2" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/rai.ravi_/", label: "Instagram", color: "#E4405F" },
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: "+91 7291879588" },
    { icon: <FaEnvelope />, text: "rairavi299@gmail.com" },
    { icon: <FaMapMarkerAlt />, text: "New Delhi, India" },
  ];

  return (
    <section className="contact" id="contact">
      {/* Blobs */}
      <div className="contact-blob contact-blob-1" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }} />
      <div className="contact-blob contact-blob-2" style={{ transform: `translate(-${mousePos.x}px, -${mousePos.y}px)` }} />

      {/* Success Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-icon">✓</div>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        </div>
      )}

      <Reveal>
        <div className="contact-header">
          <span className="overline">Get In Touch</span>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact-subtext">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>
      </Reveal>

      <div className="contact-layout">
        {/* LEFT — Info & Socials */}
        <Reveal delay={0.1}>
          <div className="contact-info-panel">
            <h3 className="info-panel-title">Contact Info</h3>
            <div className="contact-details">
              {contactInfo.map(({ icon, text }) => (
                <div className="contact-detail-row" key={text}>
                  <span className="detail-icon">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="contact-divider" />

            <h3 className="info-panel-title">Find Me On</h3>
            <div className="social-links">
              {socialLinks.map(({ icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  style={{ "--social-color": color }}
                  aria-label={label}
                >
                  <span className="social-icon">{icon}</span>
                  <span className="social-label">{label}</span>
                </a>
              ))}
            </div>

            <div className="availability-badge">
              <span className="avail-dot" />
              Available for freelance & internships
            </div>
          </div>
        </Reveal>

        {/* RIGHT — Form */}
        <Reveal delay={0.2}>
          <form onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ravi Rai"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Hey Ravi, I'd love to collaborate on..."
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="verify-box">
              <span className="verify-label">Human check: {num1} + {num2} = ?</span>
              <input
                type="number"
                required
                value={check}
                onChange={(e) => setCheck(e.target.value)}
                placeholder="?"
              />
            </div>

            {status && <p className="form-status">{status}</p>}

            <button type="submit" className="send-btn">
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </Reveal>
      </div>

      {/* Footer */}
      <div className="footer-divider" />
      <footer className="footer">
        <p className="copy">
          © {new Date().getFullYear()} <strong>Ravi Rai</strong>. Crafted with passion & ☕
        </p>
      </footer>
    </section>
  );
};

export default Contact;
