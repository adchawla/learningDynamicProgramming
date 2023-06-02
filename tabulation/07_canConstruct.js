canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;
    table.forEach((value, index) => {
        if (value) {
            wordBank.forEach(word => {
                if (target.substring(index).startsWith(word)) {
                    table[index + word.length] = true;
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

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));    // true -> 'abc' + 'def'
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));    // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));   // true: 'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't'  
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
   'e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'
]));  // false