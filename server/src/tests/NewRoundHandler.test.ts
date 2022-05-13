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
        expect(handler.handleMessage(newRoundMessage)).toMatch(JSON.stringify(newRoundMessage));
    });
});

export {};
