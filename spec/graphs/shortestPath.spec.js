import { shortestPath } from "../../graphs/shortestPath.js";

describe("shortestPath", () => {
    it('should return the shortest path between two nodes', () => {
        expect(shortestPath([
            ['w', 'x'],
            ['x', 'y'],
            ['z', 'y'],
            ['z', 'v'],
            ['w', 'v']
        ], 'w', 'z')).toBe(2);

        expect(shortestPath([
            ['w', 'x'],
            ['x', 'y'],
            ['z', 'y'],
            ['z', 'v'],
            ['w', 'v']
        ], 'y', 'x')).toBe(1);

        expect(shortestPath([
            ['a', 'c'],
            ['a', 'b'],
            ['c', 'b'],
            ['c', 'd'],
            ['b', 'd'],
            ['e', 'd'],
            ['g', 'f']
        ], 'a', 'e')).toBe(3);

        expect(shortestPath([
            ['a', 'c'],
            ['a', 'b'],
            ['c', 'b'],
            ['c', 'd'],
            ['b', 'd'],
            ['e', 'd'],
            ['g', 'f']
        ], 'e', 'c')).toBe(2);

        expect(shortestPath([
            ['a', 'c'],
            ['a', 'b'],
            ['c', 'b'],
            ['c', 'd'],
            ['b', 'd'],
            ['e', 'd'],
            ['g', 'f']
        ], 'b', 'g')).toBe(-1);

        expect(shortestPath([
            ['c', 'n'],
            ['c', 'e'],
            ['c', 's'],
            ['c', 'w'],
            ['w', 'e'],
        ], 'w', 'e')).toBe(1);

        expect(shortestPath([
            ['c', 'n'],
            ['c', 'e'],
            ['c', 's'],
            ['c', 'w'],
            ['w', 'e'],
        ], 'n', 'e')).toBe(2);

        expect(shortestPath([
            ['m', 'n'],
            ['n', 'o'],
            ['o', 'p'],
            ['p', 'q'],
            ['t', 'o'],
            ['r', 'q'],
            ['r', 's']
        ], 'm', 's')).toBe(6);
    });
});