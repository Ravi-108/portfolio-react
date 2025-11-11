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
      setStatus("Human verification failed.");
      return;
    }

    emailjs
      .send("service_56erm9k", "template_blh98d9", form, "ptHnisfkYmd_n8NYh")
      .then(() => {
        setStatus("");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
        setForm({ name: "", email: "", message: "" });
        setCheck("");
      })
      .catch(() => setStatus("Something went wrong. Try again."));
  };

  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX / 50, y: e.clientY / 50 });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="contact" id="contact">

      <div className="blob blob1" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}></div>
      <div className="blob blob2" style={{ transform: `translate(-${mousePos.x}px, -${mousePos.y}px)` }}></div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully.</p>
          </div>
        </div>
      )}

      <Reveal>
        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <form onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange}/>
          <input type="email" name="email" placeholder="Your Email" required value={form.email} onChange={handleChange}/>
          <textarea name="message" placeholder="Your Message" required value={form.message} onChange={handleChange}></textarea>

          <div className="verify-box">
            <span>{num1} + {num2} = ?</span>
            <input type="number" required value={check} onChange={(e) => setCheck(e.target.value)} />
          </div>

          <button type="submit" className="send-btn">Send Message</button>
          <p className="form-status">{status}</p>
        </form>
      </Reveal>

      <div className="social-links">
        <div className="git"><a href="https://github.com/Ravi-108" target="_blank" rel="noreferrer"><FaGithub /></a></div>
       <div className="linkedin"><a href="https://www.linkedin.com/in/ravi-rai-a2955a275/" target="_blank" rel="noreferrer"><FaLinkedin /></a></div> 
        <div className="insta"><a href="https://www.instagram.com/rai.ravi_/" target="_blank" rel="noreferrer"><FaInstagram /></a></div>
      </div>

      <div className="footer-divider"></div>
<footer className="footer">
  <div className="footer-divider"></div>

  <div className="footer-info">
    <p className="name">Ravi Rai</p>
    <p><FaPhoneAlt /> +91 7291879588</p>
    <p><FaEnvelope /> rairavi299@gmai.com</p>
    <p><FaMapMarkerAlt /> New Delhi,Delhi, India</p>
  </div>

  <p className="copy">© {new Date().getFullYear()} Ravi Rai. Crafted with passion.</p>
</footer>

    </section>
  );
};

export default Contact;
