howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    table.forEach((value, index) => {
        numbers.forEach(num => {
            if (table[index] !== null && index + num <= targetSum) {
                table[index + num] = table[index + num] || [...table[index], num];
            }
        });
    });

    //console.log(table);
    return table[targetSum];
};


// m = targetSum
// n = numbers.length
//
// Brute Force
// time: O(n^m * m) ; * m is coming from array creation
// space: O(m)
//
// Memoized
// time: O(n * m * m)
// space: O(m*m); * m is coming from the size of the array stored in the memoized object
//

console.log(howSum(7, [2, 3])); // true
console.log(howSum(7, [5, 3, 4, 7])); // true;
console.log(howSum(7, [2, 4])); // false
console.log(howSum(8, [2, 3, 5])); //true
console.log(howSum(300, [7, 14])); //false
console.log(howSum(301, [7, 14])); //false
