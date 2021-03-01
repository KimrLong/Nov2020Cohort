

// let state = {

//     clicks: 0,
//     count: 0
// }

// let NewState = state;

// NewState.clicks = 5;

// console.log(state);
// console.log(NewState);

//replace things not mutate them
//~_~_~~_~_~_~_~~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~

// let state = {

//     clicks: 0,
//     count: 0
// }

// let NewState = {
//     ...state,
//     count: 5
// }

// NewState.clicks = 5;

// console.log(state);
// console.log(NewState);


//~_~_~~_~_~_~_~~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~



// const state = { //obj inside of an obj
//     house: {
//         name: "Ravenclaw",
//         points: 18

//     }
// }

// let newState = {  //1st spread outside state, then inside state
//     ...state,
//     house: {
//         ...state.house,
//         points: state.house.points + 15
//     }
// }



//~_~_~_~_~_~_~_~//~_~_~~_~_~_~_~~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~


// state = {
//     school: {
//         name: "Hogwarts",
//         house: {
//             name: "Ravenclaw",
//             points: 25
//         }
//     }
// }

// let newState = {
//     ...state,
//     school: {
//         ...state.school,
//         name: "something else",
//         house: {
//             ...state.school.house,
//             points: state.school.house.points + 9
//         }
//     }
// }


//~_~_~_~_~_~_~_~//~_~_~~_~_~_~_~~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~

    
    //   const key = ravenclaw {

    //   const state = {
    //     houses: {
    //       gryffindor: {
    //         points: 15
    //       },
    //       ravenclaw: {
    //         points: 18
    //       },
    //       hufflepuff: {
    //         points: 7
    //       },
    //       slytherin: {
    //         points: 5
    //       }
    //     }


    // }


    // let newState = {
    //     ...state,
    //     houses: {
    //         ...state.houses,
    //         ravenslaw: {
    //             ...state.houses.ravenclas,
    //             points: state.houses.ravenclaw.points + 8
    //         }
    //     }
    // }



    //~_~_~_~_~_~_~_~//~_~_~~_~_~_~_~~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~


// let state = [1, 2, 3]; 
// const newItem = 0;
// let newState = [newItem, ...state] //


//~_~_~_~_~_~_~_~//~_~_~~_~_~_~_~~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~

// let state = [1, 2, "X", 4];

// let newState = state.map(item =>{
//     if(item === "X"){
//         return 3
//     }
//     return item
// })


//~_~_~_~_~_~_~_~//~_~_~~_~_~_~_~~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~

    // let state = [
    //     {
    //         id: 1,
    //         email: 'jen@reynholmindustries.com',
    //         data: {
    //             firstName : 'Jen'
    //         }
    //         },
    //         {
    //         id: 2,
    //         email: 'peter@initech.com',
    //         data:{
    //             firstName: 'Pete'
    //         }
    //     }
    // ]

    // let newState = state.map(item =>{
    //     if(item.id === 1){
    //         return {
    //             ...item,
    //             data: {
    //                 ...item,
    //                 firstName: 'JENNY'
    //             }

    //         }
    //     }
    //     return item
    // });
//~_~_~_~_~_~_~_~//~_~_~~_~_~_~_~~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~






// let state = [1, 2, 3, 5, 6];

// const newItem = 4;

// let newState = state.slice(); //[...state]

// newState.splice(3, 0, newItem)





// let newState = [
//     ...state.slice(0, 3),  //[1,2,3]
//     newItem, //[1,2,3,4]
//     ...state.slice(3) //[5,6]
// ]



// let state = [1, 2, "X", 4];


// let newState = state.map((item, index)=>{
//     if (index == 2){
//         return 3;
//     }
//     return item;
// })
//~_~_~_~_~_~_~_~//~_~_~~_~_~_~_~~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~_~__~

let state = [1, 2, "X", 4];

let newState = state.filter((item, index)=>{

    if (item === "X"){
        return false;
    }
    return true;
})



console.log(state);
console.log(newState);