
const isEven = (num:number) => num % 2 === 0;
const square = (num:number) => num * num;
const add = (a:number, b:number) => a + b;
export const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.filter(isEven).map(square).reduce(add));
//-> 220
console.log(arr);
