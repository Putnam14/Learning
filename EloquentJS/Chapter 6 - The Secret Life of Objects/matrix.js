// It's not worth it to refactor everything to airbnb's style guide.
// Going forward, I will adheere to airbnb's rules (well, most of them)
// This should probably be like /** * * */ or something

class Matrix { 
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[x + (y * width)] = element(x, y);
            }
        }
    }

    get (x, y) {
        return this.content[x + (y * this.width)];
    }

    set (x, y, value) {
        this.content[x + (y * this.width)] = value;
    }
}

class MatrixIterator {
    constructor (matrix) {
        this.x = 0
        this.y = 0
        this.matrix = matrix
    }
  
    next () {
        if (this.y == this.matrix.height) {return {'done': true}}
        let value = {
            'value': this.matrix.get(this.x, this.y),
            'x': this.x,
            'y': this.y
        };
        this.x += 1
        if (this.x == this.matrix.width) {
            this.x = 0
            this.y += 1
        }
        
        return {
            'done': false,
            value
        }
    }
}

Matrix.prototype[Symbol.iterator] = function iterate () {
    return new MatrixIterator(this)
}

let twoTwo = new Matrix(2, 2, (x, y) => `value ${x},${y}`)

for (let {x, y, value} of twoTwo) {
    console.log(x, y, value)
}