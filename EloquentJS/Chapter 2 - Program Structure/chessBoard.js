const size = 8
const newL = '\n'
const space = ' '
const hash = '#'
let next = hash
let str = ''

for (let i = 0; i < size; i++) {            //Rows
    for (let j = 0; j < size; j++) {        //Columns
        if (next == hash) {
            str += next
            next = space
        } else {
            str += next
            next = hash
        }
    }
    str += newL
    if (next == hash) {
        next = space
    } else {
        next = hash
    }
}

console.log(str)

//EJS Solution
/*
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/