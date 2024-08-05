import React from "react";

const toolIcons = {
  react: "bx bxl-react",
  nodejs: "bx bxl-nodejs",
  css: "bx bxl-css3",
  postgresql: "bx bxl-postgresql",
  checked: "bx bx-badge-check",
};

export const projects = [
  {
    title: "Movies review page",
    thumbnail: "/imdb_project.png",
    tools: ["react", "nodejs", "css", "postgresql", "checked"],
  },
  {
    title: "Weather based on location API",
    thumbnail: "/wheater_project.png",
    tools: ["react", "nodejs", "css", "postgresql", "checked"],
  },
  {
    title: "News API",
    thumbnail: "/news_project.png",
    tools: ["react", "nodejs", "css", "postgresql", "checked"],
  },
];

export const ProjectCard = ({ title, thumbnail, tools }) => {
  return (
    <div className="projects__content">
      <h3 className="project__title">{title}</h3>
      <img
        src={thumbnail}
        alt={`${title} thumbnail`}
        className="project__img"
      />

      <div className="project__box">
        <div className="project__group">
          {tools.map((tool, index) => (
            <div className="project__data" key={index}>
              <i className={toolIcons[tool]}></i>
              <div>
                <h3 className="tool__name">{tool}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
