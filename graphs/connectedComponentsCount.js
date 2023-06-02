export const connectedComponentsCount = (graph) => {
    const visited = new Set();
    return Object.keys(graph).reduce((accumulator, node) => {
        return accumulator + visitNodeAndConnections(graph, node, visited);
    }, 0);
};

const visitNodeAndConnections = (graph, node, visited) => {
    if (visited.has(String(node))) return 0;
    visited.add(String(node));
    for (let neighbor of graph[node]) {
        visitNodeAndConnections(graph, neighbor, visited);
    }
    return 1;
};

console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
})); // -> 2