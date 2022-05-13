import { useEffect, useState } from "react";
import "./CardOnHand.css";
const CardOnHand = ({ value, isSelected, onSelect }: any) => {
    const [_isSelected, setIsSelected] = useState(isSelected);
  
    const handleSelection = (e: any) => {
      setIsSelected((prev: any) => !prev);
      onSelect(e.target.innerText);
    };
  
    useEffect(() => {
      setIsSelected(isSelected);
    }, [isSelected]);
  
    return (
      
        <div className="CardOnHand"
          onClick={handleSelection}
          id={value}
          style={{backgroundColor: _isSelected ? "#0085cd" : "#fff"}}
        >
        <p style={{ color: _isSelected ? "#fff" : "#0085cd" }}>{value}</p>
        </div>
    );
  };

  export default CardOnHand