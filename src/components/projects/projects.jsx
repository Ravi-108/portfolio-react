import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Projects.css";
import Reveal from "../Reveal/Reveal";
import portfolioImage from "../../assets/Portfolio.png";
import News from "../../assets/News.png";
import Currency_Converter from "../../assets/Currency_Convt.png";
import PeerLink from "../../assets/PeerLink.jpeg";
const projectData = [
  {
    title: "Portfolio Website",
    img: portfolioImage,
    description: "A modern personal portfolio built using React and Framer Motion.",
    link: "https://github.com/Ravi-108"
  },
  {
    title: "News App",
    img: News,
    description: "A news application fetching articles from NewsAPI with category filters.",
    link: "https://github.com/Ravi-108/new-app/tree/main"
  },
  {
    title: "Currency Converter",
    img: Currency_Converter,
    description: "A currency converter app using ExchangeRate-API for real-time rates.",
    link: "https://github.com/Ravi-108/Currency-Exchanger"
  },
  {
    title: "PeerLink",
    img: PeerLink,
    description: "A file-sharing web app for seamless peer-to-peer transfers.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      
      <Reveal>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
      </Reveal>

      <Reveal>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 200,
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
              <Reveal>
                <img src={project.img} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project →
                  </a>
                </div>
              </Reveal>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  );
};

export default Projects;
