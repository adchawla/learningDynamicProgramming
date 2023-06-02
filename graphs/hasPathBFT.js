export const hasPath = (graph, src, dst) => {
    if (src === dst) return true;
    return graph[src].some(neighbor => hasPath(graph, neighbor, dst));
};