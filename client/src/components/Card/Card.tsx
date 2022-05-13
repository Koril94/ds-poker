import React from "react";
import './Card.css'

const Card = ({ name, value, isVisible }: any) => {
    return (
      <div className="cardWrapper">
        <p className="name">{name}</p>
        <div className="card">
          <p className="cardValue">{isVisible ? value : "?"}</p>
        </div>
      </div>
    );
  };

  export default Card