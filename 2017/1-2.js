  
const input = require('fs').readFileSync('1.txt', 'utf8');

var sum = 0;
const increment = input.length / 2;
for (let index = 0; index < input.length; index++) {
    const first = input[index];
    const sec = input[(index + increment) % input.length];
    
    if(first === sec)
    {
        sum += (+sec);
    }
}

console.log(sum)