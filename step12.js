const getRectangleArea = function(width, height) {
    return width * height;
}
console.log(getRectangleArea(5, 5));
//named function expression

//function expression

const doSomething = function(n1, n2, n3) {

    return n1 + n2 + n3;

};
console.log(doSomething(5, 2, 1));

const findSum = function sum(n) {
    if (n <= 1) return 1;
    else return n + sum(n - 1);
};
console.log(findSum(10));

const findFect = function fect(n) {
    if (n <= 1) return 1;
    else return n * fect(n - 1);
};
console.log(findFect(5));