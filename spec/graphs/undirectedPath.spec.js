import { undirectedPath } from '../../graphs/undirectedPath.js';
import { dataSet } from './undirectedDataSet.js';

describe('undirectedPath', () => {
    dataSet.forEach(({ edges, hasPath: tests }) => {
        tests.forEach(({ src, dst, result }) => {
            it(`should return ${result} for ${src} to ${dst}`, () => {
                expect(undirectedPath(edges, src, dst)).toBe(result);
            });
        });
    });
});