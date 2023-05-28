const allGridTraveler = (m, n) => {
    if (m == 1 && n == 1) return [[]];
    if (m < 1 || n < 1) return [];

    const result = [];
    const down = allGridTraveler(m-1, n);
    const right = allGridTraveler(m, n-1);
    if (down.length > 0) {
        down.forEach((path) => {
            result.push(['d', ...path]);
        });
    }
    if (right.length > 0) {
        right.forEach((path) => {
            result.push(['r', ...path]);
        });
    }
    return result;
};

console.log(allGridTraveler(2, 3));
console.log(allGridTraveler(3, 2));
console.log(allGridTraveler(3, 3));
console.log(allGridTraveler(5, 1));
console.log(allGridTraveler(5, 5));