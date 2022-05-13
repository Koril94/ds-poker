import { Fibonacci } from '../objects/Fibonacci';
import { Message } from '../classes/Message';

describe('ChooseCardHandler', () => {

    it('ChooseCardHandler', async () => {
        const chooseCardMessage = new Message();
        chooseCardMessage.setMethod('chooseCard')
        const params = {
            'gameId': '9ef90a72-c735-475a-92c9-0e1cabe63926',
            'playerId': 'c315da3e-91f9-4713-9244-7d4a4deb60d1',
            'cardValue': Fibonacci.D,
        }
        chooseCardMessage.setParams(params);
        expect(chooseCardMessage.getMethod()).toBe('chooseCard');
        expect(chooseCardMessage.getParams()).toEqual(params);
    });
});

export {};
