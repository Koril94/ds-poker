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
  revealed: boolean,
  cookieCounter: number,
  players: Player[]
}

const emptyGame = {
  id: "",
  name: "",
  revealed: false,
  cookieCounter: 0,
  players: []
}


const HOST = document.location.origin.replace(/^http/, 'ws')

export default function App() {
  const [game, setGame] = useState<GameState>(emptyGame)
  const [playerId, setPlayerId] = useState<string>("");
  const [idToJoin, setIdToJoin] = useState("");

  const [cardsAreVisible, setCardsAreVisible] = useState(false);
  const toggleCards = () => {
    setCardsAreVisible((prev) => !prev);
    const revealCardMessage : RequestMessage = {
      method : 'revealCard',
      params : {
        'gameId' : game.id,
        'playerId' : playerId,
      }
    }

    sendJsonMessage(revealCardMessage);

  }
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

    if(responseMessage.method === 'updateGame') {
      console.log(responseMessage.values.gameState)
      setGame(responseMessage.values.gameState)
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
    console.log('createMessage', createGameMessage);
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
    <GameContext.Provider value={{game, sendJsonMessage, playerId}}>
     
      {/* Stats */}
      { game.id &&
      <div className="App">
        <h1>Planning Poker</h1>
        <div className="pokerGame">
          
            <Table showCards={game.revealed} />

            <Stats players={game.players} />
        </div>

        <button
          onClick={toggleCards}
          className="btn_reveal"
        >

          {game.revealed ? "Hide" : "Reveal"}
        </button>
        <Hand />
      </div>
      }

      { !game.id && 
      <div className="App">
        <h1>Planning Poker</h1>
        <div className="pokerGame">
          
          <button onClick={handleCreate}>Create Game</button>

          <input value={idToJoin} onChange={updateIdToJoin} /><button onClick={handleJoin}>Join Game</button>
      
      
        </div>
      </div>
      }


      
    </GameContext.Provider>
  );
}








