<<<<<<< HEAD
// closue is how libraries are build.
// a function that has another function inside of it

// function add(){

//     let x = 1;
=======

// function add(){

//     let x = 1; 
>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498
//     let y = 2;

//     function f(){

//         setTimeout(()=>{
<<<<<<< HEAD
//             console.log( x+ y);
//         }, 10000)
        
//     }
//     f();

//     console.log('add func as completed');

//     return;
    
// }

=======
//             console.log(x + y); 
//         }, 10000)
        
//     }

//     f();

//     console.log('add function has completed');

//     return;

// }


>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498
// add();

// console.log('outside of our function');


<<<<<<< HEAD
//self invocing function
// (function(x, y){


//     console.log(x+y);
// })(3, 4)

// let result = (funcion(x, y){

// })
=======
// let result = (function(x, y){
//     //console.log(x + y);
//     return x + y
// })(3, 4)


// console.log(result);
>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498



// let $ = (()=>{
<<<<<<< HEAD

//     const pi = 3.14;
//     const val = 6764;

//     function multiPi(multiplier){
//         return pi * multiplier
//     }

=======
    

//     const pi = 3.14;
//     const val = 567;

//     function multPi(multiplier){
//         return pi * multiplier
//     }
    
>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498
//     function add(x){
//         return x + val;
//     }

<<<<<<< HEAD
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
=======
//     let jQuery = {
//         multiplyPi: multPi,
//         add567: add
//     };

//     return jQuery

// })();


// console.log( $.multiplyPi(5) );

// console.log($.add567(5));


const times10 = (n) =>  n * 10;

// const cache = {};

const memoTimes10 = (p) => {

    const cache = {}

    function memo(n){
        if( n in cache){
            console.log('Fetching data from cache :',n);
            return cache[n];
        }
        else{

            console.log('Calculating result');
            cache[n] = times10(n);

            return cache[n];
        }

    }

    return memo(p)

}

console.log('Calculating value of 9: ', memoTimes10(9));  //calcuated 

console.log('Cached value of 9: ', memoTimes10(9));  //cache


console.log('Calculating value of 8: ', memoTimes10(8));  //calcuated 

console.log('Cached value of 8: ', memoTimes10(8));  //cache

console.log('Calculating value of 6: ', memoTimes10(6));  //calcuated 
console.log('Calculating value of 3: ', memoTimes10(3));  //calcuated 

console.log('Cached value of 6: ', memoTimes10(8));  //cache
console.log('Cached value of 3: ', memoTimes10(3));  //cache






>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498
