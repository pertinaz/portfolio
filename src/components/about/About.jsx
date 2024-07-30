import React from 'react'
import './about.css'
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Who am I?</h2>
      <span className="section__subtitle">Introduction</span>

      <div className="about__container container grid">
        <div className="about__data">
          <Info />

          <p className="about__description">
            Interested in designing and building highly scalable services and
            APIs.
          </p>
          <a
            href="https://cv-nine-flax.vercel.app/"
            className="button button--flex"
          >
            Check my CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About