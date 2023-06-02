const depthFirstPrint = (graph, source) => {
    const stack = [source];
    while (stack.length > 0) {
        current = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    };
};

const depthFirstPrintRecursive = (graph, source) => {
    console.log(source);
    for (let neighbor of graph[source]) {
        depthFirstPrintRecursive(graph, neighbor);
    }
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

depthFirstPrintRecursive(graph, 'a');   // a, b, d, f, c, e