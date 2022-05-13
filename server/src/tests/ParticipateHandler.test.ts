import { GameState } from '../classes/GameState';
import { ParticipateHandler } from '../handler/ParticipateHandler';

describe('ChooseCardHandler', () => {
    const participateMessage: JSON = JSON.parse(`{
        method: 'participate',
        params: {
            playerId: 'c315da3e-91f9-4713-9244-7d4a4deb60d1',
        }
    }`);

    it('ChooseCardHandler', async () => {
        const handler = new ParticipateHandler();
        const gameState = new GameState();
        expect(handler.handleMessage(participateMessage, gameState, "")).toMatch(JSON.stringify(participateMessage));
    });
});

export {};
