
import{useState, useEffect} from 'react'



// const App = () =>{

//     const initialCount = () => parseInt(window.localStorage.getItem('count')) || 0;
//      //first in ARRAY is variable. second is how you update the state    //const count
//     console.log(`int Count: ${initialCount}`);                                                                   //const setCount = () =>{}
//     const [count, setCount] = useState(initialCount) //0 is initial state, what you want to set variable to (count)
//     const [count2, setCount2] = useState(0)

//     const handleChange = () => setCount(count + 1); 
//     const handleChange2 = () => {
//         setCount2(count2 + 1);
//         console.log('updating count');
//     }

//     useEffect(()=>{

//         window.localStorage.setItem('count', count);
//         console.log('count is updated');
//     }, [count])

//     useEffect(()=>{
//         console.log('I get called alot')
//     })
//     return (
//         <div styles={{textAlign: 'center', paddingTop: '200px' }}>
// {/* 
//             <button onClick={()=> setCount(count + 1)}>{count}</button> */}
//             <button onClick={handleChange}>{count}</button>
//             <button onClick={handleChange2}>{count2}</button>
//         </div>

//     )
// }

//_~_~_~ custom hook _~_~_~_~_~_~
const useCounter = ({initialState, step}) =>{
    const[count, setCount] = useState(initialState)
    const increment = () => setCount(count + step);

    return [count, increment]
}
//component----------------------
const App = () =>{
    const [count, increment] = useCounter({initialState: 5, step: 6});

    return <button onClick={increment}>{count}</button>

}












//_~_~_~_~_~_~_~_~_~_~_~this is my counter_~_~_~_~_~_~_~

// function App(){

//     const [count, setCount] = useState(0);

//     return(
//         <div className = "App">
//             <h1>Counter</h1>
//             <h3>Counting : {count}</h3>
//             <button onClick={()=> setCount(count + 2)}>ADD</button>
//             <button onClick={()=> setCount(count - 2)}>Subtract</button>
//         </div>
        
//     );
    
// }
console.log("hello")
export default App;
