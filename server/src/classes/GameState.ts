import { Player } from "./Player"

export class GameState {
    id: string;
    name: string;
    revealed: boolean;
    players: Map<string, Player>;
    cookieCounter: number;

    /**
     * @description create new game
     */
    constructor() {
        this.id = Math.random().toString(36).substring(2,9);
        this.name = "";
        this.revealed = false;
        this.players = new Map<string, Player>();
        this.cookieCounter = 0;
    }

    getCookieCounter() {
        return this.cookieCounter;
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

    setName(name: string) {
        this.name = name;
    }

    reveal() {
        this.revealed = true;
    }

    /**
     * @description initializes new round
     */
    reset() {
        this.revealed = false;
        this.players.forEach((player: Player, id: string) => {
            player.setValue("");
        });
    }

    /**
     * @description creates a new player and adds it to the current game
     */
    addNewPlayer() {
        let player = new Player();
        this.players.set(player.getId(), player);
    }

    /**
     * @description removes player from game
     * @param id Player ID
     */
    removePlayer(id: string) {
        this.players.delete(id);
    }

    increaseCookieCounter() {
        this.cookieCounter++;
    }

    payoutCookies(n: number) {
        if(this.cookieCounter - n < 0) {
            return; // TODO throw error
        }

        this.cookieCounter -= n;
    }
} 