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

const GameContext = createContext<GameState>({} as GameState)

export default GameContext