import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">I've been working on</span>

      <div className="portfolio__container container grid">
        <Frontend />
        <Frontend />
        <Backend />
        <Backend />
      </div>
    </section>
  );
};

export default Portfolio;
