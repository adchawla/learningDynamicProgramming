import { dataSet } from './directedDataSet.js';
import { hasPath } from '../../graphs/hasPathDFT.js';

describe('hasPathDFT', () => {
    dataSet.forEach(({ graph, hasPath: tests }) => {
        tests.forEach(({ src, dst, result }) => {
            it(`should return ${result} for ${src} to ${dst}`, () => {
                expect(hasPath(graph, src, dst)).toBe(result);
            });
        });
    });
});