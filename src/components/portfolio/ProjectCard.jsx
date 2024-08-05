import React from "react";

const toolIcons = {
  react: "bx bxl-react",
  nodejs: "bx bxl-nodejs",
  css: "bx bxl-css3",
  postgresql: "bx bxl-postgresql",
  checked: "bx bx-badge-check",
  tailwind: "bx bxl-tailwind-css"
};

export const projects = [
  {
    title: "Movies review page",
    thumbnail: "/imdb_project.png",
    tools: ["react", "nodejs", "css"],
    redirect:
      "https://6682901162f6531509073a02--cute-medovik-bab83a.netlify.app/",
  },
  {
    title: "Weather based on location API",
    thumbnail: "/wheater_project.png",
    tools: ["react", "nodejs", "css", "postgresql", "checked"],
    redirect:
      "https://6682901162f6531509073a02--cute-medovik-bab83a.netlify.app/",
  },
  {
    title: "News API",
    thumbnail: "/news_project.png",
    tools: ["react", "nodejs", "tailwind", "checked"],
    redirect: "https://bootcamp-news.netlify.app/",
  },
];

export const ProjectCard = ({ title, thumbnail, tools, redirect }) => {
  return (
    <div className="projects__content">
      <h3 className="project__title">{title}</h3>
      <a href={redirect}>
        <img
          src={thumbnail}
          alt={`${title} thumbnail`}
          className="project__img"
        />
      </a>
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
