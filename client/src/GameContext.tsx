import { createContext } from "react";

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

interface GameContextInterface {
  game : GameState,
  sendJsonMessage : any,
  playerId : string,

}

const GameContext = createContext<GameContextInterface>({} as GameContextInterface)

export default GameContext