import React from "react";


const projects = [
  {
    title: "project 1",
    thumbnail: "url",
    tools: ["react", "vercel", "css"],
  },
  {
    title: "project 2",
    thumbnail: "url",
    tools: ["react", "vercel", "css"],
  },
  {
    title: "project 3",
    thumbnail: "url",
    tools: ["react", "vercel", "css"],
  },
  {
    title: "project 4",
    thumbnail: "url",
    tools: ["react", "vercel", "css"],
  },
];

const ProjectCard = ({title,thumbnail,tools}) =>{
  return (
    <div className="projects__content">
      <h3 className="project__title">{title}</h3>
      <img src={thumbnail} alt={`${title} thumbnail`} className="project__img" />
      <div className="project__box">
        
      </div>
    </div>
  );
}

/*

const Backend = () => {
  return (
    <div className="projects__content">
      <h3 className="project__title">Project title</h3>
      <div className="project__img">
        
      </div>

      <div className="project__box">
        <div className="project__group">
          <div className="project__data">
            <i class="bx bxl-nodejs"></i>
            <div>
              <h3 className="tool__name">Node JS</h3>
            </div>
          </div>

          <div className="project__data">
            <i class="bx bxl-postgresql"></i>
            <div>
              <h3 className="tool__name">PostgresSQL</h3>
            </div>
          </div>

          <div className="project__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="tool__name">NestJS</h3>
            </div>
          </div>

          <div className="project__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="tool__name">Express</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
*/