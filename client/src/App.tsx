import './App.css';

import { useState } from "react";
import Table from './components/Table/Table';
import Hand from './components/Hand/Hand';
import Stats from './components/Stats/Stats';
import Card from './objects/Card';

const mockCards = [
  new Card("A", "1"),
  new Card("B", "4"),
  new Card("C", "6"),
  new Card("A", "1"),
  new Card("B", "4"),
  new Card("C", "6"),
  new Card("A", "1"),
  new Card("B", "4"),
  new Card("C", "6"),
  new Card("A", "1"),
  new Card("B", "4"),
  new Card("C", "6")
];

export default function App() {
  const [cardsAreVisible, setCardsAreVisible] = useState(false);
  const toggleCards = () => setCardsAreVisible((prev) => !prev);

  return (
    <div className="App">
      <h1>Planning Poker</h1>
      {/* Stats */}
      <div className="pokerGame">
      <Table cards={mockCards} cardsAreVisible={cardsAreVisible} />

      <Stats cards={mockCards}/>
      </div>
        <div className="flexContainer">
            <button
              onClick={toggleCards}
              style={{
                backgroundColor: "#004272",
                color: "#fff",
                borderRadius: 5,
                border: "none",
                padding: 15,
                alignSelf: "center",
                marginBottom: "30px",
              }}
            >
              {cardsAreVisible ? "Hide" : "Reveal"}
            </button>
        </div>
          <Hand />
      </div>
    
  );
}








