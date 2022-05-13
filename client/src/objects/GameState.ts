import { Player } from "./Player"

export class GameState {
    id: String;
    name: String;
    revealed: Boolean;
    players: Map<String, Player>;

    constructor() {
        this.id = Math.random().toString(36).substring(2,9);
        this.name = "";
        this.revealed = false;
        this.players = new Map<String, Player>();
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPlayers() {
        return this.players;
    }

    isRevealed() {
        return this.revealed;
    }

    setName(name: String) {
        this.name = name;
    }

    reveal() {
        this.revealed = true;
    }

    reset() {
        this.revealed = false;
    }

    addNewPlayer() {
        let player = new Player();
        this.players.set(player.getId(), player);
    }

    removePlayer(id: String) {
        this.players.delete(id);
    }
} 