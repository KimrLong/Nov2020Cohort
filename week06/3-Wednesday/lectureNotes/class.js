






// setTimeout(()=>{

//     console.log('inside settimeout');
// },0)

// function fib(n){
//     if(n<2){
//         return 1
//     }
//     return fib(n-2) + fib(n-1)
// }
// console.log(fib(40));
// console.log('outside set tome out');

// fetch(url)
// .then()
// .then()

// let promise = new Promise((resolve, reject)=>{
//     if(true){
//         let result = fib(40);
//         resolve(result);

//     }
//     else{
//         reject('error')
//     }

//     result = 2 * result;

// });

// promise.then(fibResult=>{
//     console.log(fibResult);

// })

// promise.return(mult2=>{
//     console.log(mult2)
// })

// promise.catch(error=>{
//     console.log(error)
// })

// console.log('hiii');

//sync code

// let fetch = new Promise((resolve, reject)=>{

//     const request = new XMLHttpRequest(); //XR Object

//     request.onreadystatechange = function(){
//         if(this.readyState === 4){
//             resolve(this.responseText)
//         }
//         else if(this.status === 400){
//             reject(`error: cant fetch url`)
//         }
//     }

//     request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     request.send()

// });

// fetch.then(response=>{
//     let resp = JSON.parse(response);
//     console.log("obj", resp);
//     return resizeTo;

// })



// fetch.then(data =>{

//     console.log("data recieved", data);
// })


// fetch(url)
// .then(result => result.json())
// then(data=>{

// })




// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(result => result.json())
// .then(data =>{

//     Array.push(data);
// })
// let p2 = fetch('https://jsonplaceholder.typicode.com/todos');

let p1 = fetch('https://jsonplaceholder.typicode.com/photos');
let p2 = fetch('https://jsonplaceholder.typicode.com/todos');

Promise.all([p1, p2])
.then(respArr =>{

    let arr = []
    arr.push(respArr[0].json());
    arr.push(respArr[1].json());

    console.log(respArr);
    return Promise.all(arr);
})
.then(data =>{
    console.log(data);
})