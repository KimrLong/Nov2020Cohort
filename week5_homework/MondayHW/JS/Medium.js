
//*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~Positive numbers*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
//Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.



// var nums = [30, -2, 8, 99, -45, 7, 55, -1, 17];

// var pos = nums.filter(function(sort){
//     return sort >0 ;
// })
// console.log(pos);


//*~*~***~*~*~*~*~*~*~*~*~*~*~*~*~*~*~Even numbers*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
//Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

// var nums = [14, 8, 13, 99, 71, 50, 37, 5, 2];

// var even = nums.filter(function(sort){
//         return sort % 2 == 0;
// })
// console.log(even);

//***********************************Square the numbers*******************************************
//Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].


// var arr = [7, 4, 9, 33, 6, 1, 15];

// var squ = arr.map(function(x){
//     return Math.pow(x, 2);
// })
// console.log(squ);

//*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~CITIES 1~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
//Write a function which takes an array of city objects as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.


// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];


// var coolWeather = cities.filter(function(num){

//    return num.temperature < 70.0;
// })

// console.log(coolWeather);

//*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~CITIES 2~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
//Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.


// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// var cityName = cities.map(function(obj){
//     return obj.name;
// })
// console.log(cityName);
            

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~GOOD JOB!!~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
//Print out "Good Job, !" for array of names


// var students= ["Kim", "Claude", "Ally", "Kanny", "MattR", "Ian", "Joe", "Zach"];

// var praise = students.map(function(student){
//     return `Good job, ${student}!`;

// })
// console.log(praise);

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~ Sort an Array#1 ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
//Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// let newArr = people.sort(function(a, b){
//     if (a > b) {
//         return -1
//     } else if (a < b) {
//         return 1
//     } else{
//         return 0
//     }
// })
// console.log(people);





//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~Sort an Array#2 ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
//Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.


// var students= ["Kim", "Claude", "Ally", "Layne", "MatthewR", "Ian", "Joe", "Andrea", "Jacob"];

// var order = students.sort(function(a, b){
//     return a.length - b.length;

// })
// console.log(order);

//~*~*~*~*~*~*come back to please~*~*~*~*~*~*~*~*~*~*~*~*~*~*~Sort an Array#3 ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
//


//sort by the sum of the inner array
// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6],
//   ];
//   //arr = [4, 20, 9]
//   function sum(arr) {
//     let sumResult = arr.reduce(function (acc, currentValue) {
//       return acc + currentValue; // acc = acc + currentValue
//     }, 0);
//     return sumResult;
//   }
//   function sortArr(arr){
//       arr.sort(function(a, b){
//           return sum(a) - sum(b) ; 
//       })
//   }
  

// sortArr(arr)



//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~3 TIMES ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

// function call3Times(fun) { fun(); fun(); fun(); }

// function Call3Times(n, func){
//     if (n < 1) return; 
//     func(); 
//     n = n - 1; 
//     Call3Times(n, func); 
// }
// function hello() {
//   console.log("Hello, world!");
// }

// Call3Times(3, hello);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function fun(){
//     console.log("Hello World");
// }
// function callthreetimes(newfun){
//     newfun();
//     newfun();
//     newfun();
// }
// callthreetimes(fun);





//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~N TIMES ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~**~*~*~*~*~*~**~

// function nTimes(times, func){
//     if (times < 1) return; 
//     func(); 
//     times = times - 1; 
    
//     nTimes(times, func); 
// }

// function hello() {
//   console.log("Hello, world!");
// }

// nTimes(5, hello);

//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~Sum an Array ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
//Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

// var arr = [2, 5, 34, 87, 1, 44];

// var sum = arr.reduce(function(acc, currentVal){
//     return acc + currentVal
// })

// console.log(sum);



//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~ACRONYM ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.


// var string1 = ("very", "important", "person");

// var acronym = string1.reduce(function()

var acronym = ("Very Important Person").split(' ').map(acronym => acronym[0]).join('');
console.log(acronym);



var arr1 = ['very', 'important', 'person']
var arr2 = ['national', 'aeronautics', 'space', 'administration']
var acronym = arr1.reduce(function(acc, currentVal){
    lower =  acc + currentVal[0];
    upper = lower.toUpperCase();
    return upper
}, '')
console.log(acronym);