import React, { useEffect, useState } from "react";

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
      <div>
        <div
          onClick={handleSelection}
          id={value}
          style={{
            border: "2px solid blue",
            borderRadius: "10px",
            width: "30px",
            margin: 5,
            aspectRatio: '1/2',
            backgroundColor: _isSelected ? "blue" : "#fff"
          }}
        >
          <p style={{ color: _isSelected ? "#fff" : "blue" }}>{value}</p>
        </div>
      </div>
    );
  };

  export default CardOnHand