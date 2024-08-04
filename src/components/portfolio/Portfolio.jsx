import React from "react";
import Frontend from "./Frontend";
import "./portfolio.css";
import { ProjectCard, projects } from "./Backend";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">I've been working on</span>

      <div className="portfolio__container container grid">
        <div className="projects__sort">
          {projects.map((project, index) => (
            <ProjectCard 
            key={index} 
            title={project.title} 
            thumbnail={project.thumbnail}
            tools={project.tools} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
