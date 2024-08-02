import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>
      <div className="project__img">
        <h2>Aqui va la miniatura</h2>
      </div>

      <div className="skills__box">
        <div className="skills__group">
          
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Vercel</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Tailwind</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
