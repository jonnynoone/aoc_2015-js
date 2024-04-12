const box = '2x3x4';

const dimensions = box.split('x');

const length = dimensions[0];
const width = dimensions[1];
const height = dimensions[2];

const surfaceArea = 2 * (length * width + width * height + length * height);

const sides = [length * width, width * height, length * height];

if (sides[0] <= sides[1] && sides[0] <= sides[2]) {
}
