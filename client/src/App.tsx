import './App.css';

import React, { useEffect, useState } from "react";
import Table from './components/Table/Table';
import Hand from './components/Hand/Hand';
import Stats from './components/Stats/Stats';
// import Player2 from './objects/Player';
import GameContext from './GameContext';

interface Player {
  id: string,
  name: string,
  value: number | string,
}

interface GameState {
  id: string,
  name: string,
  isRevealed: boolean,
  cookieCounter: number,
  players: Player[]
}

const mockGameState = {
  id: '24234234',
  name: 'Hackathon',
  isRevealed: false,
  cookieCounter: 4,
  players: [
    { id: '111', name: 'A', value: 1 },
    { id: '112', name: 'B', value: 2 },
    { id: '113', name: 'C', value: 12 },
    { id: '114', name: 'D', value: 4 },
  ]
}

const HOST = document.location.origin.replace(/^http/, 'ws')
const ws = new WebSocket(HOST)

export default function App() {
  const [game, setGame] = useState<GameState>(mockGameState)

  const [cardsAreVisible, setCardsAreVisible] = useState(false);
  const toggleCards = () => setCardsAreVisible((prev) => !prev);

  // ws.onopen = () => {
  //   // set Player ID
  // }

  useEffect(() => setGame(mockGameState))

  ws.onmessage = (data: any) => {
    // let dataObject = JSON.parse(data);
    // setGame(mockGameState)
    console.log(data)
  }

  const handleUpdate = () => {
    ws.send(JSON.stringify({ method: 'createGame' }))
  }

  return (
    <GameContext.Provider value={game}>
      <div className="App">
        <h1>Planning Poker</h1>
        {/* Stats */}
        <Table showCards={cardsAreVisible}  />

        <Stats players={game.players} />

        <div className="flexContainer">
          <div className="neuerTable">

            <button onClick={handleUpdate}>Test</button>
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
    </GameContext.Provider>

  );
}








