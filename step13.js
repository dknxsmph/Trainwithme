//Ver Declaration
//1
function helloSomeone(name) { return `Hello , ${name}` }
//2
function area(width, height) { return width * height }
//3
function evenNum(num) {
    if (num % 2 === 0) return true;
    else return false;
}

//Ver Expression
//1
const hello = (name) => `Hello  ${name}`;
console.log(hello(`pcy`));
//2
const areaa = (width, height) => width * height;
console.log(areaa(5, 5));
//3
const evenNumm = (num) => num % 2 === 0;
console.log(evenNumm(1485));

// const random = (param, param, ...) => {
//     statement 1
//     statement 2
//     statement 3
//     return value;
// }