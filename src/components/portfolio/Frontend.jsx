import React from "react";

const Frontend = () => {
  return (
    <div className="projects__content">
      <h3 className="project__title">Frontend developer</h3>
      <div className="project__img">
        <h2>Aqui va la miniatura</h2>
      </div>

      <div className="project__box">
        <div className="project__group">
          <div className="project__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="tool__name">Vercel</h3>
            </div>
          </div>

          <div className="project__data">
            <i class="bx bxl-tailwind-css"></i>
            <div>
              <h3 className="tool__name">Tailwind</h3>
            </div>
          </div>

          <div className="project__data">
            <i class="bx bxl-react"></i>
            <div>
              <h3 className="tool__name">React</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
