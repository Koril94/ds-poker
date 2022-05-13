import { Player } from "./Player"

export type GameState = {
    id: String,
    name: String,
    isRevealed: Boolean,
    players: Player[]
};