canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    table.forEach((value, index) => {
        numbers.forEach(num => {
            table[index + num] = table[index + num] || value;
        });
    });
    console.log(table);
    return table[targetSum];
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true;
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); //true
console.log(canSum(300, [7, 14])); //false
