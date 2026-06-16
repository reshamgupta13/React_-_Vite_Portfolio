import React from 'react';
import "./Card.css";

function Card({ title, image, description, tech }) {
  return (
    <div className="card">
      <h1>{title}</h1>

      <div className="hovercard">
        <div className="overlay">
          <h2>{title}</h2>
          <p>{description}</p>
          <span>{tech}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;