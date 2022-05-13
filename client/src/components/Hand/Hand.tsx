import { useState } from "react";
import CardOnHand from "../CardOnHand/CardOnHand";

const Hand = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const cardValues = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  
    const onSelect = (newValue: any) => {
      setSelectedCard(newValue);
    };
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
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
    );
  };

  export default Hand