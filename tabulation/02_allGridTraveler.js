const allGridTraveler = (m, n) => {
    const table = Array(m).fill().map(() => Array(n).fill(0));
    table[0][0] = 1;
    table.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            // if allowed to move right
            if (colIndex + 1 < n) {
                table[rowIndex][colIndex+1] += value;
            }
            // if allowed to move down
            if (rowIndex + 1 < m) {
                table[rowIndex+1][colIndex] += value;
            }
        });
    });
    console.log(table);
    return table[m-1][n-1];
};

//console.log(allGridTraveler(2, 3));
//console.log(allGridTraveler(3, 2));
console.log(allGridTraveler(3, 4));
//console.log(allGridTraveler(18, 18));
