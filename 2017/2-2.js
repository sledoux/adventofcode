function isInt(n) 
{
    return n % 1 === 0;
}

function sortNumber(a, b)
{
    return a - b;
}

const input = require('fs').readFileSync('2.txt', 'utf8');
var textByLine = input.split("\n")

var checkSum = 0;
textByLine.forEach(line => {
    // for each line split by space or tab, and map to number
    var lineSplitted = line.split("\t").map(Number);
    // sort
    var sortedArray = lineSplitted.sort(sortNumber);

    for (let i = 0; i < sortedArray.length; i++) {
        const small = sortedArray[i];
        for (let j = sortedArray.length -1; j > 0; j--) {
            if(j<=i)
            {
                break;
            }
            const big = sortedArray[j];
            if(isInt(big/small))
            {
                checkSum += (big / small)
                break
            }
        }
    }

    // Add difference between last and first
    // checkSum += sortedArray[sortedArray.length - 1] - sortedArray[0]
});

console.log(checkSum)