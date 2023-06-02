export const hasPath = (graph, src, dst) => {
    const queue = [src];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) return true;
        graph[current].forEach(neighbor => queue.push(neighbor));
    }
    return false;
};

console.log(hasPath({
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}, 'f', 'k')); // true

console.log(hasPath({
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}, 'f', 'j')); // false

console.log(hasPath({
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}, 'i', 'h')); // true;

console.log(hasPath({
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],
}, 'v', 'w')); // true

console.log(hasPath({
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],
}, 'v', 'z')); // false