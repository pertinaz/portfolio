import React from "react";

const Backend = () => {
  return (
    <div className="projects__content">
      <h3 className="project__title">Backend Developer</h3>
      <div className="project__img">
        <h2>Aqui va la miniatura</h2>
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
