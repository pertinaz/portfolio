import "./services.css"

import React from 'react'

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services_container container grid">
        <div className="servies__content">
          <div>
            <i className="uil uil services__icon"></i>
            <h3 className="services__title"></h3>
          </div>

          <span className="services__button">
            View More{" "} <i className="uil uil-arrow-right services__button"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">User Interfaces development</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">API services development</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">UX element interactions</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Positioning of web pages and branding</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Design and mockups of products for companies.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services