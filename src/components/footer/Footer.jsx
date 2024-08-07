import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Manuel</h1>

        <div className="footer__reminder">
          <span className="message">
            Portfolio unfinished, adding new components and features while I
            learned
          </span>
        </div>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="https://whatismyipaddress.com/" className="footer__link">
              Try me
            </a>
          </li>
        </ul>
        <span className="footer__copy">@Pertinaz. Open source contributor</span>
      </div>
    </footer>
  );
};

export default Footer;
