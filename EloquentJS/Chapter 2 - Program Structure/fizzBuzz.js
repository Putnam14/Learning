//First method
const fizz = 'Fizz'
const buzz = 'Buzz'
const fizzBuzz = 'FizzBuzz'
for (let i = 1; i <= 100; i++) {
    let result = ''
    if (i%3 == 0 && i%5 == 0) {result = fizzBuzz}
    else if (i%3 == 0) {result = fizz}
    else if (i%5 == 0) {result = buzz}
    console.log(result)
}


//Second method
/*const fizz = 'Fizz'
const buzz = 'Buzz'
const fizzBuzz = 'FizzBuzz'
for (let i = 1; i <= 100; i++) {
    let result = ''
    let isFizz = i%3 == 0
    let isBuzz = i%5 == 0
    if (isFizz && isBuzz) {
        result = fizzBuzz
    } else if (isFizz) {
        result = fizz
    } else if (isBuzz) {
        result = buzz
    }
    console.log(result||i)
}*/


//Third method
/*
for (let i = 1; i <= 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log('FizzBuzz')
    } else if (i%3 == 0) {
        console.log('Fizz')
    } else if (i%5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}*/

//EJS Solution
/*
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
*/