import { GameState } from '../classes/GameState';
import { Message } from '../classes/Message';
import { CreateGameHandler } from '../handler/CreateGameHandler';

describe('ChooseCardHandler', () => {
    const createGameMessage = new Message()
    createGameMessage.setMethod('createGame');
    createGameMessage.setParams({
            playerId: 'c315da3e-91f9-4713-9244-7d4a4deb60d1',
            cardType: 'Fibonacci',
        });

    it('CreateGameHandler', async () => {
        const handler = new CreateGameHandler();
        const gameState = new GameState();
        expect(handler.handleMessage(createGameMessage, gameState, "")).toMatch('');
    });
});

export {};
