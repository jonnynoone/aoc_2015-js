const fs = require('node:fs');

const data = fs.readFileSync('data.txt', 'utf-8');
const boxes = data.split('\r\n');

let total = 0;
boxes.forEach(box => {
	const dimensions = box.split('x');

	const length = Number(dimensions[0]);
	const width = Number(dimensions[1]);
	const height = Number(dimensions[2]);

	const volume = length * width * height;

	let perimeter;
	if (length * width <= width * height && length * width <= length * height) {
		perimeter = length * 2 + width * 2;
	} else if (
		width * height <= length * width &&
		width * height <= length * height
	) {
		perimeter = width * 2 + height * 2;
	} else if (
		length * height <= length * width &&
		length * height <= width * height
	) {
		perimeter = length * 2 + height * 2;
	}

	const ribbon = volume + perimeter;
	total += ribbon;
});

console.log(total);
