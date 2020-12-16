// let a = 5;
// let b = 10;


// if(b>a) {
//     console.log('a is less than b');


// }
//(condition) ? (true) : (false)
// a > b ? console.log('a is less than b') : console.log('a is greater than b');

// let str = 'this is my result ${a > b ? 4: 10}'
// console.log(str);


// let add = (x=0, y=0) => {
//     // x = x || 0;
//     // y = y || 0;

//     return x + y
// }

// console.log(add(5,8));

// let logArgs = (...args) => {
//     args.forEach(el => {

//         console.log(el);
//     })

// }

// // logArgs(7, 8, 5, 4)
// const isUnique = (arr) => {
//     let result = true;
//     let cashe = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (cashe[arr[i]]){
//             return false;
//         }
//         else{
//             cache[arr[i]] = true;
//         }


//     }
//     return result;
//     };


//   let arr1 = [1, 2, 2, 3];


  //1 - 2
  //1 - 2
  //2 -3
//   console.log(isUnique(arr1));

// const uniqSort = function(arr) {
//     let cache = {1: true}

//     let result = [];

//     for (let i = 0; i <arr.length; i++){
//         if(!cache[arr[i]]){
//             result.push(arr[i]);
//             cache[arr[i]] = true;
//         }
//     }
//     result.sort((a, b)=>a-b)

//     }
//     return result;

// let arr = [1, 5, 2, 10, 2, 2, 3, 3, 4, 3,];

// console.log(uniqSort(arr));


// let str = "Hello World"

// str.replace(" ", "")




// var a = "The eyes"
// var b = "they see"


// function compare(a,b) {
//     var c = a.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
//     var d = b.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
//         return (c === d) ? "True":"False";
// }

// var result = compare(a, b);

// console.log(result);


// const cache = {};

// const memoTime10 = (n) => {
//     if(n in cache){
//         console.log('Fetching from cache', n);
//         return cache[n];
//     }
//     else{
// //store new value in cache
// cache[n] = n * 10;
// //message
// console.log('Calculating results');
// //return n * 10

//     }
//     return cache[n]

// }

// memoTime10(9)
// memoTime10(9)


// let arr = [1, 2, 3, 4, 5];

// var a = arr[0]

// let[a, b, c, d, e] = arr;

// console.log(d);



// var luke = { occupation: 'jedi', father: 'anakin'};
// let {occupation:o, father:f} = luke;
// console.log(o);


// var luke = { occupation: 'jedi',
// father: {

//     fname: 'anakin',
//     lname: 'skywalker'

// }};

// let {occupation:o, father:{fname:f, lname:l}} = luke;

// console.log(f, l);



// let add = (a=0, b=0) => {
//     // a = a || 0;
//     // b = b || 0;
//     return a + b
// }
// console.log(add(4));

// let sum = (...args) => {
//     if(args.length === 0) return 0;
//     if(args.length === 1) return args[0];
//     let sum = 0;
//     sum = args.reduce((acc, element) => acc + element, 0)
//     return sum
// }

// let result = sum(6, 7, 8, 9)
// console.log(result);


// let arr = [1, 3, 5]

// let arrB = [...arr];

// let arr2 = [10, 20, 40, ...arr, 99, 90 ]
// console.log(arr2);

// console.log(arr);

// arrB[0] = 99;

// console.log(arr, arrB);



let arr = [1, 2, 3, 4];

for (let val of arr) {
    console.log(val);
}

let obj = {
    a: 1,
    b: 2,
    c: 3,
}

let result = Object.values(obj);
console.log(result);

// for(let key in obj) {
//     let value = obj[key]
//     console.log(key, value);
// }