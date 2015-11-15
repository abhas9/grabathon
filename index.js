var readline = require('readline-sync');

var T = readline.question();
var consoleInput = [];
for (var i = 0; i < T; i++) {
	readline.question(); // Ignoring input of N
	consoleInput.push(readline.question());
}

for (var i = 0; i < T; i++) {
	console.log(sequenceCost(consoleInput[i].split(' ')));
}

function sequenceCost(arr) {
    var cost = 0, i;
    for (i = 0; i < arr.length-1; i++) {
        cost += arr[i] * arr[i+1];
    }
    cost -= arr[0]*arr[arr.length-1];
    return cost;
}