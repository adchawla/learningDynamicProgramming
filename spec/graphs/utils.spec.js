import { edgeListToAdjacencyList } from '../../graphs/utils.js'

describe('edgeListToAdjacencyList', () => {
    it('should convert an edge list to an adjacency list', () => {
        const edges = [
            ['i', 'j'],
            ['k', 'i'],
            ['m', 'k'],
            ['k', 'l'],
            ['o', 'n']
        ];
        const adjacencyList = edgeListToAdjacencyList(edges);
        expect(adjacencyList).toEqual({
            i: ['j', 'k'],
            j: ['i'],
            k: ['i', 'm', 'l'],
            m: ['k'],
            l: ['k'],
            o: ['n'],
            n: ['o']
        });
    })
});