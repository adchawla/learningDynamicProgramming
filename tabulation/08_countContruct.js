countConstruct = (target, wordBank, memo = {}) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    table.forEach((value, index) => {
        if (value) {
            wordBank.forEach(word => {
                if (target.substring(index).startsWith(word)) {
                    table[index + word.length] += value;
                }
            });
        }
    });
    //console.log(table);
    return table[target.length];
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

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));    // true -> 'abc' + 'def'
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));    // true -> 'abc' + 'def'
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));    // false
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));   // true: 'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't'  
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));   // 2
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
   'e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'
]));  // false