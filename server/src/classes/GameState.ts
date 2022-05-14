import { Player } from "./Player"
import { v4 } from "uuid";

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
        this.id = v4();
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
        this.players.forEach((player: Player) => {
            player.setValue("");
        });
    }

    /**
     * @description creates a new player and adds it to the current game
     */
    addNewPlayer(playerID: string, playerName: string) {
        let player = new Player(playerID, playerName);
        this.players.set(player.getId(), player);
        return player.getId();
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

    buildGameStateJson() {
        let responseBody: any;
        responseBody["id"] = this.getId();
        responseBody["name"] = this.getName();
        responseBody["isRevealed"] = this.isRevealed();
        responseBody["cookieCounter"] = this.getCookieCounter();
        let i = 0;
        this.players.forEach((player: Player, id: string) => {
            let playerJson: any;
            playerJson["id"] = player.getId();
            playerJson["name"] = player.getName();
            playerJson["value"] = player.getValue();
            responseBody["players"][i] = playerJson;
            i++;
        });
        return responseBody;
    }
}
