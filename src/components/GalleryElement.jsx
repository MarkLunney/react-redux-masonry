import React from "react";

const GalleryElement = ({ element, onClick }) => {
  let className = element.isExpanded ? "gallery-item expanded" : "gallery-item";

  return (
    <li className={`gallery-item-selector ${className}`}>
      <img src={element.src} alt={element.title} />
      <div className="details" onClick={onClick}>
        <div className="tag">
          {element.client}
          <br />
          {element.title}
        </div>
        <div className="description">
          {element.description}
          <br />
          <a href={element.linkUrl} target="_blank" rel="noopener noreferrer">
            {element.linkText}
          </a>
        </div>
      </div>
    </li>
  );
};

export default GalleryElement;
