const {Fibonacci} = require('./objects/Fibonacci')
const {ChooseCardHandler} = require('./handler/ChooseCardHandler');

describe('ChooseCardHandler', () => {
    const chooseCardMessage = {
        method: 'chooseCard',
        params: {
            gameId: '9ef90a72-c735-475a-92c9-0e1cabe63926',
            playerId: 'c315da3e-91f9-4713-9244-7d4a4deb60d1',
            cardValue: Fibonacci.D,
        }
    };

    it('ChooseCardHandler', async () => {
        const handler = new ChooseCardHandler();
        expect(handler.handleMessage(chooseCardMessage)).toMatch(JSON.stringify(chooseCardMessage));
    });
});

export {};
