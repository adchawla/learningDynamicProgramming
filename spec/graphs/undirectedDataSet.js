export const dataSet = [{
    edges: [
        ['i', 'j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k', 'l'],
        ['o', 'n']
    ],
    hasPath: [
        { src: 'j', dst: 'm', result: true },
        { src: 'm', dst: 'j', result: true },
        { src: 'l', dst: 'j', result: true },
        {src: 'k', dst: 'o', result: false},
        {src: 'i', dst: 'o', result: false},
    ],
}, {
    edges: [
        ['b', 'a'],
        ['c', 'a'],
        ['b', 'c'],
        ['q', 'r'],
        ['q', 's'],
        ['q', 'u'],
        ['q', 't'],
    ],
    hasPath: [
        { src: 'a', dst: 'b', result: true },
        { src: 'a', dst: 'c', result: true },
        { src: 'r', dst: 't', result: true },
        { src: 'r', dst: 'b', result: false },
    ],
}, {
    edges: [
        ['s', 'r'],
        ['t1', 'q'],
        ['q', 'r'],
    ],
    hasPath: [
        {src: 'r', dst: 't1', result: true},
    ]
}
];