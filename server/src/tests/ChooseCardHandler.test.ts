import { Fibonacci } from '../objects/Fibonacci';
import { ChooseCardHandler } from '../handler/ChooseCardHandler';
import { GameState } from '../classes/GameState';

describe('ChooseCardHandler', () => {
    const chooseCardMessage: JSON = JSON.parse(`{
        'method': 'chooseCard',
        'params': {
            'gameId': '9ef90a72-c735-475a-92c9-0e1cabe63926',
            'playerId': 'c315da3e-91f9-4713-9244-7d4a4deb60d1',
            'cardValue': Fibonacci.D,
        }
    }`);

    it('ChooseCardHandler', async () => {
        const handler = new ChooseCardHandler();
        const gameState = new GameState();
        expect(handler.handleMessage(chooseCardMessage, gameState)).toMatch(JSON.stringify(chooseCardMessage));
    });
});

export {};
