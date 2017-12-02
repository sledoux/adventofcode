  
const input = require('fs').readFileSync('1.txt', 'utf8');

var sum = 0;

for (let index = 0; index < input.length; index++) {
    const first = input[index];
    const sec = input[index+1];

    // if we have a match we check until where it matches then add to the sum
    if(first === sec)
    {
        sum += (+sec);
        var endIndex = index+2;
        while (input[endIndex] === sec) {
            sum += (+input[endIndex]);
            endIndex++;
        }
        index = endIndex-1;
    }
}

var first = input[input.length-1];
var sec = input[0];
// Check if last element matches first, do same process
if(first === sec)
{
    sum+=(+sec);
    var i = 0;
    first = input[i];
    sec = input[i+1];
    while (first === sec) {
        sum += sec
    }
}

console.log(sum)