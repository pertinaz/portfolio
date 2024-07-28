import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/manuel.pkg/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.youtube.com/playlist?list=PLFjssrERTJim7yZBdLG7RENVxQez3Jv6y"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-music"></i>
      </a>

      <a
        href="https://github.com/pertinaz"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
