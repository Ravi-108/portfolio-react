import React from "react";
import "./Services.css";
import Reveal from "../Reveal/Reveal";
import { RiCodeSSlashLine, RiLayout4Line, RiLightbulbLine } from "react-icons/ri";

const servicesData = [
  {
    icon: <RiLayout4Line />,
    title: "Frontend Development",
    desc: "Building responsive, modern and high-performing UI with React, Tailwind & Framer Motion."
  },
  {
    icon: <RiCodeSSlashLine />,
    title: "Backend & APIs",
    desc: "Creating secure and scalable REST APIs using Node.js, Express, Firebase & MongoDB."
  },
  {
    icon: <RiLightbulbLine />,
    title: "UI/UX & Design",
    desc: "Designing seamless user experiences with clean layouts, accessibility & visual balance."
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <Reveal>
        <h2 className="services-title">
          What <span>I Do</span>
        </h2>
      </Reveal>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <Reveal delay={index * 0.15} key={index}>
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Services;
