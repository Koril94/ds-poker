import { useEffect, useState } from "react";
import { RequestMessage } from "../../interfaces/RequestMessage";
import "./CardOnHand.css";
const CardOnHand = ({ value, isSelected, onSelect, sendJsonMessage, playerId, gameId, disabled }: any) => {
    const [_isSelected, setIsSelected] = useState(isSelected);
  
    const handleSelection = (e: any) => {
      setIsSelected((prev: any) => !prev);
      onSelect(e.target.innerText);
      const chooseCardMessage : RequestMessage = {
        method : 'chooseCard',
        params : {
          playerId : playerId,
          cardValue : e.target.innerText,
          gameId : gameId
        }
      }
      console.log('chooseCartMessage', chooseCardMessage);
      sendJsonMessage(chooseCardMessage);
    };
  
    useEffect(() => {
      setIsSelected(isSelected);
    }, [isSelected]);
  
    return (
      
        <div className="CardOnHand"
          onClick={disabled ? () => alert('no changes allowed') : handleSelection}
          id={value}
          style={{backgroundColor: _isSelected ? "#0085cd" : "#fff"}}
        >
        <p style={{ color: _isSelected ? "#fff" : "#0085cd" }}>{value}</p>
        </div>
    );
  };

  export default CardOnHand