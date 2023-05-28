bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let bestResult = null;
    for (let num of numbers) {
        const result = bestSum(targetSum - num, numbers, memo);
        if (result !== null) {
            const combination = [...result, num];
            if (bestResult === null || combination.length < bestResult.length) {
                bestResult = combination;
            }
        }
    }
    memo[targetSum] = bestResult;
    return bestResult;
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

// console.log(bestSum(7, [2, 3])); // [3, 2, 2]
// console.log(bestSum(7, [5, 3, 4, 7])); // [ 7 ]
// console.log(bestSum(7, [2, 4])); // null
// console.log(bestSum(8, [2, 3, 5])); // [5, 3]
// console.log(bestSum(8, [1, 4, 5])); [4, 4]
// console.log(bestSum(300, [7, 14])); // null
console.log(bestSum(301, [7, 14])); // [ 14 * 21 + 7]
console.log(bestSum(100, [1, 2, 5, 25]));
