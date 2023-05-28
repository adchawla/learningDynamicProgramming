canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for(let word of wordBank) {
        if (target.startsWith(word) && canConstruct(target.substring(word.length), wordBank, memo)) {
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
};

//
// Bruce Force:
// m = target.length
// n = wordBank.length
// time:
//      O(n^m) => no of comparisons
//      O(n^m * m) => find and substr
// space:
//      O(m)    => recursion
//      O(m * m)    => string
//
// Memoization:
// time: O(n * m2)

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));    // true -> 'abc' + 'def'
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));    // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));   // true: 'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't'  
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
   'e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'
]));  // false