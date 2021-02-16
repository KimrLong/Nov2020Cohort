// closue is how libraries are build.
// a function that has another function inside of it

// function add(){

//     let x = 1;
//     let y = 2;

//     function f(){

//         setTimeout(()=>{
//             console.log( x+ y);
//         }, 10000)
        
//     }
//     f();

//     console.log('add func as completed');

//     return;
    
// }

// add();

// console.log('outside of our function');


//self invocing function
// (function(x, y){


//     console.log(x+y);
// })(3, 4)

// let result = (funcion(x, y){

// })



// let $ = (()=>{

//     const pi = 3.14;
//     const val = 6764;

//     function multiPi(multiplier){
//         return pi * multiplier
//     }

//     function add(x){
//         return x + val;
//     }

//     let $ = {
//         multiplyPi: multiPi,
//         addNum: add
//     };

//     return $
// })();

// console.log($.multiplyPi(5));

// console.log($.addNum(4976));

// const times10 = (n) => n * 10;

// const cache = {};
// const memoTimes10 = (n) =>{
//     if( n in cache){
//         console.log('fetch from cache :', n);
//         return cache[n];
//     }
//     else{
//         console.log('calculating result');
//         cache[n] = times10(n);

//         return cache[n];
//     }
// }

// console.log('calculating value of 9: ', memoTimes10(9)); //calculated
// console.log('cached value of 9: ', memoTimes10(9)); //cached




const memotimes10 = (p) => {

const cache = {};
    function memo(n){
    if( n in cache){
        console.log('fetch from cache :', n);
        return cache[n];
    }
    else{
        console.log('calculating result');
        cache[n] = times10(n);

        return cache[n];
    }
    }
    return memo(p)
}
console.log('calculating value of 9: ', memoTimes10(9)); //calculated
console.log('cached value of 9: ', memoTimes10(9)); //cached
