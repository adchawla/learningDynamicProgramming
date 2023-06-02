import { edgeListToAdjacencyList } from "./utils.js";

export const shortestPath = (edges, nodeA, nodeB) => {
    const graph = edgeListToAdjacencyList(edges);
    const visited = new Set();
    const queue = [];

    queue.push([nodeA, 0]);
    visited.add(nodeA);

    while (queue.length > 0) {
        const current = queue.shift();

        if (current[0] == nodeB) return current[1];

        graph[current[0]].forEach(neighbor => {
            if (visited.has(neighbor)) return;
            visited.add(neighbor);
            queue.push([neighbor, current[1] + 1])
        });
    }

    return -1;
};