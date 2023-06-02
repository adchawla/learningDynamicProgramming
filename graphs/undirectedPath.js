import { edgeListToAdjacencyList } from "./utils.js";

export const undirectedPath = (edges, src, dst) => {
    const graph = edgeListToAdjacencyList(edges);
    const stack = [src];
    const visited = new Set();

    while (stack.length) {
        const node = stack.pop();
        if (node === dst) return true;
        if (visited.has(node)) continue;
        visited.add(node);
        stack.push(...graph[node]);
    }
    return false;
};