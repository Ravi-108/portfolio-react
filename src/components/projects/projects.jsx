import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./projects.css";
import Reveal from "../Reveal/Reveal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolioImage from "../../assets/Portfolio.png";
import News from "../../assets/News.png";
import Currency_Converter from "../../assets/Currency_Convt.png";
import PeerLink from "../../assets/PeerLink.jpeg";
import AiSiteBuilder from "../../assets/ai_site_builder.png";
import GeoFact from "../../assets/geo_fact.png";
import SalesBi from "../../assets/sales_bi.png";

const projectData = [
  {
    title: "AI Web Generation Platform",
    img: AiSiteBuilder,
    description: "Full-stack SaaS that translates natural language prompts into functional React components via LLM. Features Stripe payment processing and real-time LLM output sanitisation.",
    tags: ["React", "Node.js", "OpenRouter API", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com/Ravi-108",
    live: "https://ai-site-builder-pi.vercel.app/",
    badge: "🚀 Live",
  },
  {
    title: "GEO-FACT: AI Claim Verifier",
    img: GeoFact,
    description: "Document intelligence tool that ingests PDFs, extracts factual claims via LLM inference, and cross-references them against live web data. Produces audit-ready verified/unverified reports.",
    tags: ["Python", "OpenRouter API", "Streamlit", "HTML"],
    github: "https://github.com/Ravi-108",
    live: "https://geo-fact.streamlit.app/",
    badge: "🌐 Live",
  },
  {
    title: "Sales Intelligence BI Platform",
    img: SalesBi,
    description: "End-to-end BI pipeline: data generation → MySQL ETL → ML forecasting → Streamlit dashboard → Power BI report with 25+ DAX measures across 4 data tables.",
    tags: ["Python", "MySQL", "Power BI", "DAX", "Streamlit", "ML"],
    github: "https://github.com/Ravi-108/sales-bi-platform",
    live: null,
    badge: null,
  },
  {
    title: "Portfolio Website",
    img: portfolioImage,
    description: "A modern personal portfolio built using React and Framer Motion with smooth scroll animations and a responsive design.",
    tags: ["React", "Framer Motion", "CSS"],
    github: "https://github.com/Ravi-108",
    live: null,
    badge: null,
  },
  {
    title: "News App",
    img: News,
    description: "A news application fetching live articles from NewsAPI with category filters, search, and a clean card-based layout.",
    tags: ["React", "NewsAPI", "REST"],
    github: "https://github.com/Ravi-108/new-app/tree/main",
    live: null,
    badge: null,
  },
  {
    title: "Currency Converter",
    img: Currency_Converter,
    description: "A real-time currency converter using ExchangeRate-API, supporting 150+ currencies with a polished, interactive UI.",
    tags: ["JavaScript", "API", "CSS"],
    github: "https://github.com/Ravi-108/Currency-Exchanger",
    live: null,
    badge: null,
  },
  {
    title: "PeerLink",
    img: PeerLink,
    description: "A peer-to-peer file-sharing web app for seamless, direct transfers between devices without any server uploads.",
    tags: ["WebRTC", "Node.js", "React"],
    github: "#",
    live: null,
    badge: null,
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Reveal>
        <div className="projects-header">
          <span className="overline">My Work</span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-subtext">
            7 projects spanning AI, full-stack SaaS, BI analytics & more — each reflecting
            my passion for clean code and thoughtful engineering.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 60,
            depth: 180,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="project-slider"
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index} className="project-card">
              <div className="project-card-inner">
                <div className="project-img-wrapper">
                  <img src={project.img} alt={project.title} />
                  <div className="project-img-overlay" />
                  {project.badge && (
                    <span className="project-live-badge">{project.badge}</span>
                  )}
                </div>

                <div className="project-info">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>{tag}</span>
                    ))}
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-ghost"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-primary"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  );
};

export default Projects;
