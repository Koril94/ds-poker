import React from "react";
import './Table.css'
import Card from '../../objects/Card';
import CardComponent from '../CardComponent/CardComponent';

const Table = ({ cards, cardsAreVisible } : any) => {
    return (
      <div className='table'
        style={{
          display: "flex",

        }}
      >
        {cards.map((card: Card) => (
          <CardComponent
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