bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    table.forEach((value, index) => {
        numbers.forEach(num => {
            if (table[index] !== null && index + num <= targetSum) {
                const potentialValue = [...table[index], num];
                if (table[index + num] === null || table[index + num].length > potentialValue.length) {
                    table[index + num] = potentialValue;
                }
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

console.log(bestSum(7, [2, 3])); // true
console.log(bestSum(7, [5, 3, 4, 7])); // true;
console.log(bestSum(7, [2, 4])); // false
console.log(bestSum(8, [2, 3, 5])); //true
console.log(bestSum(8, [1, 4, 5])); //true
console.log(bestSum(100, [1, 2, 5, 25])); //true
console.log(bestSum(300, [7, 14])); //false
console.log(bestSum(301, [7, 14])); //false
