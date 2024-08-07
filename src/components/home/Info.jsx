import React from 'react'

const Info = () => {
  return (
    <div className="about__info">
      <div className="about__box">
        <i class="bx bx-chip"></i>
        <h3 className="about__title">Systems Engineering Student</h3>
        <span className="about__subtitle">Web pasionate</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt"></i>
        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">
          Building and deploying new exciting projects
        </span>
      </div>

      <div className="about__box">
        <i class="bx bx-support"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Info