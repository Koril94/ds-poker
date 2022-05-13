import { Fibonacci } from '../objects/Fibonacci';
import { Player } from '../classes/Player';

describe('Player', () => {

    it('Player', async () => {
        const player = new Player("123");
        player.setName('ABC')
        player.setValue(Fibonacci.D)
        expect(player.getName()).toBe('ABC');
        expect(player.getValue()).toEqual(Fibonacci.D);
        expect(player.getId()).toBe("123");
        player.setValue(Fibonacci.F)
        expect(player.getValue()).toEqual(Fibonacci.F);
    });
});

export {};
