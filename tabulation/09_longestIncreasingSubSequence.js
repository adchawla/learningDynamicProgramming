// returns an array of numbers that is the longest increasing subsequence
const lis2 = numbers => {
    const table = new Array(numbers.length).fill(1);
    let max = 1;
    
    for (let i = 1; i < numbers.length; i++) {
        for (let j = 0; j < i; j++) {
        if (numbers[i] > numbers[j] && table[i] <= table[j]) {
            table[i] = table[j] + 1;
            max = Math.max(max, table[i]);
        }
        }
    }
    
    const result = [];
    for (let i = table.length - 1; i >= 0; i--) {
        if (table[i] === max) {
        result.push(numbers[i]);
        max--;
        }
    }
    
    return result.reverse();
};

const lis = numbers => {
    const table = Array(numbers.length).fill().map((value, index) => {
        return {
            index,
            value: numbers[index],
            lastPossibleIndies: [],
            bestIndex: -1,
            length: 0
        };
    });

    let indexWithMaxLength = 0;
    let maxLength = 0;
    numbers.forEach((number, index) => {
        numbers.slice(0, index).forEach((prevNumber, prevIndex) => {
            if (prevNumber < number) {
                table[index].lastPossibleIndies.push(prevIndex);
                const newLength = table[prevIndex].length + 1;
                if (newLength > table[index].length) {
                    table[index].bestIndex = prevIndex;
                    table[index].length = newLength;
                    if (newLength > maxLength) {
                        indexWithMaxLength = index;
                        maxLength = newLength;
                    }
                }
            }
        });
    });

    console.log(JSON.stringify(table.map(entry => entry.bestIndex)));
    console.log(JSON.stringify(table.map(entry => entry.length)));
    console.log(indexWithMaxLength, maxLength);
};

// console.log(lis([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(lis([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));  // [10]
console.log(lis([1, 3, 2, 4, 6, 5, 8, 7, 9, 10]));  // [1, 2, 4, 6, 8, 9, 10]