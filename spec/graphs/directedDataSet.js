export const dataSet = [{
    graph: {
        f: ['g', 'i'],
        g: ['h'],
        h: [],
        i: ['g', 'k'],
        j: ['i'],
        k: []
    },
    hasPath: [
        { src: 'f', dst: 'k', result: true },
        { src: 'f', dst: 'j', result: false },
        { src: 'i', dst: 'h', result: true },
    ],
}, {
    graph: {
        v: ['x', 'w'],
        w: [],
        x: [],
        y: ['z'],
        z: [],
    },
    hasPath: [
        { src: 'v', dst: 'w', result: true },
        { src: 'v', dst: 'z', result: false },
    ],
}
];