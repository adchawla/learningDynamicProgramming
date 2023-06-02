export const edgeListToAdjacencyList = (edgeList) => {
    const adjacencyList = {};
    edgeList.forEach(edge => {
        const [src, dst] = edge;
        if (!adjacencyList[src]) adjacencyList[src] = [];
        if (!adjacencyList[dst]) adjacencyList[dst] = [];
        adjacencyList[src].push(dst);
        adjacencyList[dst].push(src);
    });
    return adjacencyList;
};