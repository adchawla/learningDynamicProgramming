export const largestComponent = (graph) => {
    const visited = new Set();
    let currentComponentLength = 0;
    for (const node in graph) {
        currentComponentLength = Math.max(currentComponentLength, lengthOfComponent(graph, node, visited));
    }
    return currentComponentLength;
};

const lengthOfComponent = (graph, node, visited) => {
    if (visited.has(String(node))) return 0;
    visited.add(String(node));
    let count = 1;
    for (const neighbor of graph[node]) {
        count += lengthOfComponent(graph, neighbor, visited);
    }
    return count;
};