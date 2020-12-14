// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.



let sum = (...args) =>{
//[]
    return args.reduce((acc, val)=>{
        return acc + val
    }, 0)
    
}

console.log(sum(1,3));
console.log(sum(10, 20, 5));