import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiTailwindcss, SiNodedotjs, SiMongodb, SiGit,
  SiExpress, SiPostgresql, SiPrisma, SiStripe,
  SiPython, SiStreamlit, SiMysql, SiFirebase,
  SiFramer, SiGithub
} from "react-icons/si";
import { TbReportAnalytics, TbBrandOpenai } from "react-icons/tb";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { icon: <SiHtml5 />, label: "HTML5", color: "#E34F26" },
      { icon: <SiCss3 />, label: "CSS3", color: "#1572B6" },
      { icon: <SiJavascript />, label: "JavaScript", color: "#F7DF1E" },
      { icon: <SiReact />, label: "React", color: "#61DAFB" },
      { icon: <SiTailwindcss />, label: "Tailwind", color: "#38BDF8" },
      { icon: <SiFramer />, label: "Framer Motion", color: "#BB4BFF" },
    ],
  },
  {
    label: "Backend & Database",
    skills: [
      { icon: <SiNodedotjs />, label: "Node.js", color: "#68A063" },
      { icon: <SiExpress />, label: "Express", color: "#ffffff" },
      { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
      { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
      { icon: <SiMysql />, label: "MySQL", color: "#00758F" },
      { icon: <SiPrisma />, label: "Prisma ORM", color: "#5A67D8" },
      { icon: <SiFirebase />, label: "Firebase", color: "#FFA000" },
      { icon: <SiStripe />, label: "Stripe", color: "#635BFF" },
    ],
  },
  {
    label: "AI / Data & BI",
    skills: [
      { icon: <TbBrandOpenai />, label: "LLM / OpenRouter", color: "#10A37F" },
      { icon: <SiPython />, label: "Python", color: "#3776AB" },
      { icon: <SiStreamlit />, label: "Streamlit", color: "#FF4B4B" },
      { icon: <TbReportAnalytics />, label: "Power BI", color: "#F2C811" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { icon: <SiGit />, label: "Git", color: "#F05032" },
      { icon: <SiGithub />, label: "GitHub", color: "#ffffff" },
    ],
  },
];

const stats = [
  { value: "7+", label: "Projects Built" },
  { value: "20+", label: "Technologies" },
  { value: "100%", label: "Passion" },
];

const About = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const currentSkills =
    skillCategories.find((c) => c.label === activeCategory)?.skills || [];

  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT — Bio */}
        <div className="about-left">
          <motion.span
            className="overline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get to Know Me
          </motion.span>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.p
            className="about-bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            I'm <strong>Ravi</strong>, an aspiring full-stack developer passionate
            about crafting clean, intuitive, and immersive digital experiences. I
            enjoy solving real-world problems with elegant UI design, structured logic,
            and modern web technologies.
          </motion.p>

          <motion.p
            className="about-bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            viewport={{ once: true }}
          >
            From building AI-powered SaaS platforms and BI pipelines to full-stack
            web apps — I love shipping projects that blend robust engineering with
            great user experience.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            viewport={{ once: true }}
          >
            {stats.map(({ value, label }) => (
              <div className="stat-item" key={label}>
                <span className="stat-value gradient-text">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Tabbed Skills */}
        <div className="about-right">
          <motion.span
            className="overline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tech Stack
          </motion.span>

          <motion.h3
            className="skills-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Tools & <span className="gradient-text">Technologies</span>
          </motion.h3>

          {/* Category Tabs */}
          <motion.div
            className="skill-tabs"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {skillCategories.map(({ label }) => (
              <button
                key={label}
                className={`skill-tab ${activeCategory === label ? "active" : ""}`}
                onClick={() => setActiveCategory(label)}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {currentSkills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                style={{ "--skill-color": skill.color }}
              >
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-label">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
