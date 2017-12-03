const input = require('fs').readFileSync('2.txt', 'utf8');
var textByLine = input.split("\n")

function sortNumber(a, b)
{
    return a - b;
}
var checkSum = 0;
textByLine.forEach(line => {
    // for each line split by space or tab, and map to number
    var lineSplitted = line.split("\t").map(Number);
    // sort
    var sortedArray = lineSplitted.sort(sortNumber);
    // Add difference between last and first
    checkSum += sortedArray[sortedArray.length - 1] - sortedArray[0]
});

console.log(checkSum)