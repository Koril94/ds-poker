import { CreateGameHandler } from '../handler/CreateGameHandler';

describe('ChooseCardHandler', () => {
    const createGameMessage: JSON = JSON.parse(`{
        method: 'createGame',
        params: {
            playerId: 'c315da3e-91f9-4713-9244-7d4a4deb60d1',
            cardType: 'Fibonacci',
        }
    }`);

    it('CreateGameHandler', async () => {
        const handler = new CreateGameHandler();
        expect(handler.handleMessage(createGameMessage)).toMatch(JSON.stringify(createGameMessage));
    });
});

export {};
