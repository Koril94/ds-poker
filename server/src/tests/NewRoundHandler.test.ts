import { GameState } from '../classes/GameState';
import { NewRoundHandler } from '../handler/NewRoundHandler';

describe('ChooseCardHandler', () => {
    const newRoundMessage: JSON = JSON.parse(`{
        method: 'newRound',
        params: {
            gameId: '9ef90a72-c735-475a-92c9-0e1cabe63926',
        }
    }`);

    it('ChooseCardHandler', async () => {
        const handler = new NewRoundHandler();
        const gameState = new GameState();
        expect(handler.handleMessage(newRoundMessage, gameState, "")).toMatch(JSON.stringify(newRoundMessage));
    });
});

export {};
