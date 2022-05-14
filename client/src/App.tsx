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

const emptyGame = {
  id: "",
  name: "",
  isRevealed: false,
  cookieCounter: 0,
  players: []
}


const HOST = document.location.origin.replace(/^http/, 'ws')

export default function App() {
  const [game] = useState<GameState>(emptyGame)
  const [playerId, setPlayerId] = useState<string>();
  const [idToJoin, setIdToJoin] = useState("");

  const [cardsAreVisible, setCardsAreVisible] = useState(false);
  const toggleCards = () => setCardsAreVisible((prev) => !prev);
  // ws.onopen = () => {
  //   // set Player ID
  // }

  const { sendJsonMessage, lastJsonMessage } = useWebSocket(HOST, {
    share: true,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  
  const updateIdToJoin = (e : React.ChangeEvent<HTMLInputElement>) => {
    setIdToJoin(e.target.value || "");
  }

  const handleCreate = () => {
    const createGameMessage : RequestMessage = {
      method: 'createGame',
      params: {
        playerId,
      }
    };
    console.log(createGameMessage);
    sendJsonMessage(createGameMessage);
  }

  const handleJoin = () => {
    const joinGameMessage : RequestMessage = {
      method: 'participate',
      params: {
        playerId,
        gameId : idToJoin
      }
    }
    console.log('joinMessage', joinGameMessage);
    sendJsonMessage(joinGameMessage);
  }

  return (
    <GameContext.Provider value={game}>
     
      {/* Stats */}
      { game.id &&
      <div className="App">
        <h1>Planning Poker</h1>
        <div className="pokerGame">
          
            <Table showCards={cardsAreVisible} />

            <Stats players={game.players} />
        </div>

        <button
          onClick={toggleCards}
          className="btn_reveal"
        >

          {cardsAreVisible ? "Hide" : "Reveal"}
        </button>
        <Hand />
      </div>
      }

      { !game.id && 
      <div className="App">
        <h1>Planning Poker</h1>
        <div className="pokerGame">
                    
          <button className="btn_createGame" onClick={handleCreate} >Create Game</button>

          <input className="input_sessionName" placeholder="Game Name" value={idToJoin} onChange={updateIdToJoin} />
          
          <button className="btn_joinGame" onClick={handleJoin}>Join Game</button>
      
        </div>
      </div>
      }
      
    </GameContext.Provider>
  );
}








