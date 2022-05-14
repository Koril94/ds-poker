import { GameState } from '../classes/GameState';
import { RevealCardsHandler } from '../handler/RevealCardsHandler';
import {Message} from "../classes/Message";

describe('ChooseCardHandler', () => {

    it('ChooseCardHandler', async () => {
        const revealCardsMessage = new Message()
        revealCardsMessage.setMethod('revealCards')
        revealCardsMessage.setParams({
            gameId: '9ef90a72-c735-475a-92c9-0e1cabe63926',
        });
        const handler = new RevealCardsHandler();
        const gameState = new GameState();
        expect(handler.handleMessage(revealCardsMessage, gameState, "", "")).toMatch('');
    });
});

export {};
