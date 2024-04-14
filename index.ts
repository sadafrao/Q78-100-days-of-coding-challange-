// Q78
 function squareDeclaration(num: number): number {
    return num * num;
  }

  const squareExpression = function (num: number): number {
    return num * num;
  }
     console.log(squareDeclaration(5)); // Output: 25// both have same answer with two different way

     console.log(squareExpression(5)); // Output: 25