const input = (+require('fs').readFileSync('3.txt', 'utf8'));

var x = 0;
var y = 0;
var i = 0; // Main index we keep going until we find the input numper
while(i <= input)
{
    // Spiral algorithm to find coordinates of the index
    

    // Output absolute sum of x and y
    console.log(Math.abs(x) + Math.abs(y));
}
