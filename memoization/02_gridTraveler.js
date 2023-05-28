const gridTraveler = (m, n, memo = {}) => {
    const key = m + "," + n;
    let cachedValue = memo[key];
    if (cachedValue) return cachedValue;
    if (m == 1 && n == 1) return 1;
    if (m == 0 || n == 0) return 0;
    cachedValue = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
    memo[key] = cachedValue;
    return cachedValue;
}

console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(18, 18));
