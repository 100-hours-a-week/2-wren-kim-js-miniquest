import Rectangle from "./Rectangle.js";

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    isSquare() {
        return this.width === this.height;
    }
}

// 사용 예시
const square = new Square(7);
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSquare());

const rect2 = new Square(10);
rect2.height = 12;
console.log(rect2.isSquare());