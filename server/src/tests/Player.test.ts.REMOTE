import { Fibonacci } from '../objects/Fibonacci';
import { Player } from '../classes/Player';

describe('Player', () => {

    it('Player', () => {
        const player = new Player();
        player.setName('ABC')
        player.setValue(Fibonacci.D)
        expect(player.getName()).toBe('ABC');
        expect(player.getValue()).toEqual(Fibonacci.D);
        expect(player.getId()).not.toBe(null);
        player.setValue(Fibonacci.F)
        expect(player.getValue()).toEqual(Fibonacci.F);
    });
});

export {};
