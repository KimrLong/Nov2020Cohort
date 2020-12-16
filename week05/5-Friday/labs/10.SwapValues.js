// ***Swap values of the two variables
var a = "first"
var b = "second"
console.log(a, b);
// second first

let arr1 = [1, 2, 3, 4];

arr2 = [5, 9, 7, 0];


let temp = arr1[0]
arr1[0] = arr2[0]
arr2[0] = temp




[ arr1[0], arr2[0]] = [arr2[0], arr1[0]];

console.log(arr1, arr2);