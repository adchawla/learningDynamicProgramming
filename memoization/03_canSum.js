canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum == 0) return true;
    if (targetSum < 0) return false;

    const result = numbers.some(num => {
        return canSum(targetSum - num, numbers, memo);
    });
    memo[targetSum] = result;
    return result;
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true;
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); //true
console.log(canSum(300, [7, 14])); //false
