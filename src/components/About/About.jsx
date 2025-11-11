import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        About <span className="highlight">Me</span>
      </motion.h2>

      <motion.p
        className="about-text"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        I'm Ravi, an aspiring full-stack developer passionate about crafting clean,
        intuitive, and immersive digital experiences. I enjoy solving real-world problems
        with elegant UI design, structured logic, and modern web technologies.
      </motion.p>

      <motion.div
        className="skills-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="skill-card">HTML</div>
        <div className="skill-card">CSS</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">React</div>
        <div className="skill-card">Tailwind</div>
        <div className="skill-card">Git & GitHub</div>
      </motion.div>

    </section>
  );
};

export default About;
