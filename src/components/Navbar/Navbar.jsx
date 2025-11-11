import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li><a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a></li>
        <li><a href="#about" className={activeSection === "about" ? "active" : ""}>About</a></li>
        <li><a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a></li>
        <li><a href="#services" className={activeSection === "services" ? "active" : ""}>Services</a></li>
        <li><a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a></li>
      </ul>

      <a 
        href="https://www.linkedin.com/in/ravi-rai-a2955a275/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-connect"
      >
        Connect
      </a>

      <div 
        className={menuOpen ? "hamburger open" : "hamburger"} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
};

export default Navbar;
