import React from "react";
import './Card.css'

const Card = ({ name, value, isVisible }: any) => {
    return (
      <div className="cardWrapper">
        <p className="name">{name}</p>
        <div
          className='card'
          style={{
            border: "2px solid blue",
            borderRadius: "10px",
            width: "30px",
            margin: 5,
            aspectRatio: '1/2'
          }}
        >
          <p className="cardValue">{isVisible ? value : "?"}</p>
        </div>
      </div>
    );
  };

  export default Card