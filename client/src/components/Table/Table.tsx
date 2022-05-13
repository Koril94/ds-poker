import React from "react";
import Card from "../Card/Card";
import './Table.css'

const Table = ({ cards, cardsAreVisible } : any) => {
    return (
      <div className='table'
        style={{
          display: "flex",

        }}
      >
        {cards.map((card: any) => (
          <Card
            key={card.name}
            name={card.name}
            value={card.value}
            isVisible={cardsAreVisible}
          />
        ))}
      </div>
    );
  };

  export default Table