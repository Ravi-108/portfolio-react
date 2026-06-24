import React from "react";
import "./Services.css";
import Reveal from "../Reveal/Reveal";
import { RiCodeSSlashLine, RiLayout4Line, RiLightbulbLine } from "react-icons/ri";

const servicesData = [
  {
    icon: <RiLayout4Line />,
    title: "Frontend Development",
    desc: "Building responsive, modern, and high-performing UIs with React, Tailwind & Framer Motion.",
    points: ["React & Next.js", "Responsive Design", "Framer Motion Animations", "Performance Optimization"],
    color: "#61DAFB",
  },
  {
    icon: <RiCodeSSlashLine />,
    title: "Backend & APIs",
    desc: "Creating secure and scalable REST APIs using Node.js, Express, Firebase & MongoDB.",
    points: ["Node.js & Express", "MongoDB & Firebase", "REST API Design", "Authentication (JWT)"],
    color: "#68A063",
  },
  {
    icon: <RiLightbulbLine />,
    title: "UI/UX & Design",
    desc: "Designing seamless user experiences with clean layouts, accessibility & visual balance.",
    points: ["Figma Prototyping", "Design Systems", "Accessibility (a11y)", "Micro-interactions"],
    color: "#ff8a00",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <Reveal>
        <div className="services-header">
          <span className="overline">What I Offer</span>
          <h2 className="section-heading">
            What <span className="gradient-text">I Do</span>
          </h2>
          <p className="services-subtext">
            Delivering end-to-end solutions — from polished interfaces to robust back-end systems.
          </p>
        </div>
      </Reveal>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <Reveal delay={index * 0.15} key={index}>
            <div
              className="service-card"
              style={{ "--service-color": service.color }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>

              <ul className="service-points">
                {service.points.map((point) => (
                  <li key={point}>
                    <span className="service-bullet">→</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="service-card-border" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Services;
