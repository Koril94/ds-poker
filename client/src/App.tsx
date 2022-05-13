import './App.css';

import React, { useEffect, useState } from "react";
import Table from './components/Table/Table';
import Hand from './components/Hand/Hand';
import Stats from './components/Stats/Stats';

const mockCards = [
  {
    name: "A",
    value: "1"
  },
  {
    name: "B",
    value: "4"
  },
  {
    name: "C",
    value: "6"
  },
  {
    name: "A",
    value: "1"
  }
];

export default function App() {
  const [cardsAreVisible, setCardsAreVisible] = useState(false);
  const toggleCards = () => setCardsAreVisible((prev) => !prev);

  return (
    <div className="App">
      <h1>Planning Poker</h1>
      {/* Stats */}
      <Table cards={mockCards} cardsAreVisible={cardsAreVisible} />
      <Stats  />

      
      <div className="flexContainer">
      <div className="neuerTable">
      
      <button
        onClick={toggleCards}
        style={{
          backgroundColor: "blue",
          color: "#fff",
          borderRadius: 5,
          border: "none",
          padding: 15,
          alignSelf: "center"
        }}
      >
      

        {cardsAreVisible ? "Hide" : "Reveal"}
      </button>
      </div>
      <Hand />
    </div>
    </div>
    
  );
}








