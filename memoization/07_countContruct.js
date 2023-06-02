countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    let myResult = [];
    for(let word of wordBank) {
        if (target.startsWith(word)) {
            const combinations = countConstruct(target.substring(word.length), wordBank, memo);
            if (combinations.length > 0) {
                combinations.forEach(combination => {
                    myResult.push([word, ...combination]);
                });
            }
        }
    }
    memo[target] = myResult
    return myResult;
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

console.log('abcdef:', countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));    // true -> 'abc' + 'def'
console.log('abcdef:', countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));    // true -> 'abc' + 'def'
console.log('skateboard:', countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));    // false
console.log('enterapotentpot:', countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));   // true: 'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't'  
console.log('purple:', countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));   // 2
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
   'e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'
]));  // false