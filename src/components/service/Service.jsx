import React from "react";
import "./service.css";

function Service({ img, link, title }) {
  return (
    <div className="s">
      <div className="s-browser">
        <div className="s-circle"></div>
        <div className="s-circle"></div>
        <div className="s-circle"></div>
        <h3 className="s-title">{title}</h3>
      </div>
      <a href={link} target="_black" rel="noreferrer">
        <img src={img} alt="" className="s-img" />
      </a>
    </div>
  );
}

export default Service;
