import React, { useEffect, useState } from "react";
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
      <div className="CardOnHand">
        <div
          onClick={handleSelection}
          id={value}
          style={{
            /*border: "1px solid #0085cd",
            borderRadius: "10px",
            width: "30px",
            margin: 5,
            aspectRatio: '1/2',*/
            backgroundColor: _isSelected ? "#0085cd" : "#fff"
          }}
        >
          <p style={{ color: _isSelected ? "#fff" : "#0085cd" }}>{value}</p>
        </div>
      </div>
    );
  };

  export default CardOnHand