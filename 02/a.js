const fs = require('node:fs');

const data = fs.readFileSync('data.txt', 'utf8');
const boxes = data.split('\r\n');

let total = 0;

boxes.forEach(box => {
	const dimensions = box.split('x');

	const length = Number(dimensions[0]);
	const width = Number(dimensions[1]);
	const height = Number(dimensions[2]);

	const surfaceArea = 2 * (length * width + width * height + length * height);

	const sides = [length * width, width * height, length * height];

	let smallestSide;
	if (sides[0] <= sides[1] && sides[0] <= sides[2]) {
		smallestSide = sides[0];
	} else if (sides[1] <= sides[0] && sides[1] <= sides[2]) {
		smallestSide = sides[1];
	} else if (sides[2] <= sides[0] && sides[2] <= sides[1]) {
		smallestSide = sides[2];
	}

	total += surfaceArea + smallestSide;
});

console.log(total);
