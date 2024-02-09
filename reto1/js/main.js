const calcCircle = (radius) => {
    return Math.PI * (radius **2);
};

const calcSquare = (side) => {
    return side **2;
};

const calcTriangle = (base, height) => {
    return (base * height) / 2;
};

let inFigure = prompt('What figure do you want to calculate? (circle, square, triangle)');

switch (inFigure) {
    case 'circle':
        let radius = prompt('Enter the radius');
        console.log(`The area of the circle is ${calcCircle(radius)}`);
    break;
    case 'square':
        let side = prompt('Enter the side');
        console.log(`The area of the square is ${calcSquare(side)}`);
    break;
    case 'triangle':
        let base = prompt('Enter the base');
        let height = prompt('Enter the height');
        console.log(`The area of the triangle is ${calcTriangle(base, height)}`);
    break;
}