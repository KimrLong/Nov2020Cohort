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


const cache = {};

const memoTime10 = (n) => {
    if(n in cache){
        console.log('Fetching from cache', n);
        return cache[n];
    }
    else{
//store new value in cache
cache[n] = n * 10;
//message
console.log('Calculating results');
//return n * 10

    }
    return cache[n]

}

memoTime10(9)
memoTime10(9)