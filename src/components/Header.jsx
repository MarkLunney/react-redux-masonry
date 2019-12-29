import React from "react";

const Header = ({ title, subtitle, icons }) => (
  <div className="header">
    <div className="title-left">
      <h1>{title}</h1>
      <br />
      <h2>{subtitle}</h2>
    </div>

    <div className="title-right">
      {icons.map(({ id, src, url, title }) => (
        <a href={url} key={id} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={title} />
        </a>
      ))}
    </div>
  </div>
);

export default Header;
