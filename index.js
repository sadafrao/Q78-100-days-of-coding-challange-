// Q78
function squareDeclaration(num) {
    return num * num;
}
var squareExpression = function (num) {
    return num * num;
};
console.log(squareDeclaration(5)); // Output: 25// both have same answer with two different way
console.log(squareExpression(5)); // Output: 25
