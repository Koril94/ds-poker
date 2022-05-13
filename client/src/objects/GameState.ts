import { PlayerCard } from "./PlayerCard"

export type GameState = {
    id: String,
    name: String,
    isRevealed: Boolean,
    playerCards: PlayerCard[]
};