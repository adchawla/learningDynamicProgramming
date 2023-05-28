const fib = (n, memo={}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    const result = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = result;
    return result;
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));