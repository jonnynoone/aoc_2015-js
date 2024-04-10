const fs = require('node:fs');

let input;
try {
	input = fs.readFileSync('data.txt', 'utf8');
} catch (err) {
	console.log(err);
}

let floor = 0;
for (let i = 0; i < input.length; i++) {
	if (input[i] === '(') floor++;
	if (input[i] === ')') floor--;
}

console.log(floor);
