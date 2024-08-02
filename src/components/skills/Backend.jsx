import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="project__img">
        <h2>Aqui va la miniatura</h2>
      </div>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-nodejs"></i>
            <div>
              <h3 className="skills__name">Node JS</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-postgresql"></i>
            <div>
              <h3 className="skills__name">PostgresSQL</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">NestJS</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Express</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
