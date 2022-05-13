import { useState } from "react";
import CardOnHand from "../CardOnHand/CardOnHand";
import "./Hand.css";




const Hand = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const cardValues = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  
    const onSelect = (newValue: any) => {
      setSelectedCard(newValue);
    };
  
    return (
      <div>
      <h3>Card chosen</h3>
      
      <div className="hand">
        {cardValues.map((card) => {
            return (
            <CardOnHand
              key={card}
              value={card}
              isSelected={card.toString() === selectedCard}
              onSelect={onSelect}
            />
          );
        })}
      </div>
      </div>
    );
  };

  export default Hand