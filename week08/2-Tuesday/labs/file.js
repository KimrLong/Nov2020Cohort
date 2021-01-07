const fs = require('fs');

let file = "./stack.js"
// fs.readFile(file, (error, buffer) => {

//     if(error){
//         console.error(error.message);
//         return;
//     }

//     console.log(`file data: ${buffer}`);
    
// })

let fileName = './test.txt'
fs.writeFile(fileName, "I heart node", (error) => {
    if(error){
        console.error(error.message);
        return;

    }
    console.log("File saved at: ", fileName);
})