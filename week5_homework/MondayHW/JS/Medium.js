
//*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~Positive numbers*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~
// var nums = [30, -2, 8, 99, -45, 7, 55, -1, 17];

// var pos = nums.filter(function(sort){
//     return sort >0 ;
// })
// console.log(pos);


//*~*~***~*~*~*~*~*~*~*~*~*~*~*~*~*~*~Even numbers*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


// var nums = [14, 8, 13, 99, 71, 50, 37, 5, 2];

// var even = nums.filter(function(sort){
//         return sort % 2 == 0;
// })
// console.log(even);

//***********************************Square the numbers*******************************************

// var arr = [7, 4, 9, 33, 6, 1, 15];

// var squ = arr.map(function(x){
//     return Math.pow(x, 2);
// })
// console.log(squ);

//*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~CITIES 1~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

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

// var students= ["Kim", "Claude", "Ally", "Kanny", "MattR", "Ian", "Joe", "Zach"];

// var praise = students.map(function(student){
//     return `Good job, ${student}!`;

// })
// console.log(praise);


//~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~Sort an Array#2 ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

// var students= ["Kim", "Claude", "Ally", "Layne", "MatthewR", "Ian", "Joe", "Andrea", "Jacob"];

// var order = students.sort(function(a, b){
//     return a.length - b.length;

// })
// console.log(order);

//~*~*~*~*~*~*come back to please~*~*~*~*~*~*~*~*~*~*~*~*~*~*~Sort an Array#3 ~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~

// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6] ];

// var order = arr.sort(function(a, b){
//     if (a.toString() === b.toString());
//         return b - a;
// })

// console.log(order);

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
// var arr = [2, 5, 34, 87, 1, 44];

// var sum = arr.reduce(function(acc, currentVal){
//     return acc +  currentVal

// })

// console.log(sum);




