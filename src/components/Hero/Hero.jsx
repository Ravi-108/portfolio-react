import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <motion.img
        src={profile_img}
        alt="Profile"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-img"
      />

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Hi, I'm <span className="highlight">Ravi Rai</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        A passionate learner and aspiring developer focused on building clean, impactful digital experiences.
      </motion.p>

      <motion.div
        className="hero_actions"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <a href="https://www.linkedin.com/in/ravi-rai-a2955a275/" target="_blank" rel="noopener noreferrer" className="btn primary-btn">
          Connect
        </a>

        <a href="https://github.com/Ravi-108" target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
          GitHub
        </a>

       <a href="/Ravi_Resume.pdf" download="Ravi_Rai_Resume.pdf" className="btn outline-btn">
  Resume
</a>

      </motion.div>

    </section>
  );
};

export default Hero;
