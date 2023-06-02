const fib = (n) => {
    const table = Array(n+1).fill(0);
    table[1] = 1;
    table.forEach((value, index) => {
        if (index+1 <= n) table[index+1] += value;
        if (index+2 <= n) table[index+2] += value;
    });
    return table[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));