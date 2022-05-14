import './App.css';

import React, { useEffect, useState } from "react";
import Table from './components/Table/Table';
import Hand from './components/Hand/Hand';
import Stats from './components/Stats/Stats';
// import Player2 from './objects/Player';
import GameContext from './GameContext';
import useWebSocket from 'react-use-websocket';

import {ServerResponse as ReponseMessage} from './interfaces/ServerResponse'
import {RequestMessage} from './interfaces/RequestMessage';

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

export default function App() {
  const [game, setGame] = useState<GameState>(mockGameState)
  const [playerId, setPlayerId] = useState<string>();
  

  const [cardsAreVisible, setCardsAreVisible] = useState(false);
  const toggleCards = () => setCardsAreVisible((prev) => !prev);
  // ws.onopen = () => {
  //   // set Player ID
  // }

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(HOST, {
    share: true,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setGame(mockGameState))
  useEffect(() => {
    const responseMessage : ReponseMessage = lastJsonMessage;
    console.log(lastJsonMessage);
    if (responseMessage == null) return;

    if(responseMessage.method === 'connect') {
      setPlayerId(responseMessage.values.playerId);
      console.log(responseMessage.values.playerId);
    }

  }, [lastJsonMessage]);
  ;
  

  const handleUpdate = () => {
    const createGameMessage : RequestMessage = {
      method: 'createGame',
      params: {
        playerId,
      }
    };
    console.log(createGameMessage);
    sendJsonMessage(createGameMessage);
  }

  return (
    <GameContext.Provider value={game}>
      <div className="App">
        <h1>Planning Poker</h1>
        {/* Stats */}
        {readyState}
        <div className="pokerGame">

          <Table showCards={cardsAreVisible} />

          <Stats players={game.players} />
        </div>


        <button onClick={handleUpdate}>Test</button>
        <button
          onClick={toggleCards}
          className="btn_reveal"
        >

          {cardsAreVisible ? "Hide" : "Reveal"}
        </button>
        <Hand />
      </div>
    </GameContext.Provider>
  );
}








