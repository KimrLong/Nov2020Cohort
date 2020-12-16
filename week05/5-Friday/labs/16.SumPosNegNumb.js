
/*
Create a function sumPlusMinus() that takes an array and sums 
separately positive and negative numbers

it should return an object like this:

{
    plus: 74, // sum of all positive numbers
    minus: -54 // sum of all negative numbers
}

*/
let sumPlusMinus = arr => {
    arr.reduce((acc, elem)) =>{
        return (
            {
                plus: elem > 0 ? acc.plus + elem : acc.plus,
                minus: elem < 0 ? acc.minus + elem : acc.minus
            }
        )
    }, {plus: 0, minus: 0})
}





var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];
// let obj = {positive:0, negative: 0}
// function sumPlusMinus(nums) {
//     for( let x of nums) {
//         if(x > 0) {
//             obj.positive += x;

//         }
//         else
//             obj.negative += x;
//     }
// }

// // Write code here

// sumPlusMinus(nums)
// console.log(obj);
// // {plus: 74, minus: -54}

