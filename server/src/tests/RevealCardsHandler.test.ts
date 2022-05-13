import { RevealCardsHandler } from '../handler/RevealCardsHandler';

describe('ChooseCardHandler', () => {
    const revealCardsMessage: JSON = JSON.parse(`{
        method: 'revealCards',
        params: {
            gameId: '9ef90a72-c735-475a-92c9-0e1cabe63926',
        }
    }`);

    it('ChooseCardHandler', async () => {
        const handler = new RevealCardsHandler();
        expect(handler.handleMessage(revealCardsMessage)).toMatch(JSON.stringify(revealCardsMessage));
    });
});

export {};
