import React, {useState, useEffect} from "react";

const ConditionalRendering = () => {

<<<<<<< HEAD
  const [isLoaded, setIsLoaded] = useState(false); //has out data loaded

  useEffect(()=>{

    setTimeout(()=>{
      //represents API call
      setIsLoaded(true);
=======
  const [isLoaded, setIsLoaded] = useState(false); //has our data loaded 

  useEffect(() => {
    
    setTimeout(()=>{
        // represents a long api call
        setIsLoaded(true);
>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498

    }, 3000)

  }, [])

<<<<<<< HEAD

if(!isLoaded){ //conditional rendering. condition renders if condition is false
  return <> Data is loading</>
}
else{
  return<> This is our main view</>
}
=======
  if(!isLoaded){
    return <> Data is loading</>
  }
  else{
    return <>This is our main view</>
  }
>>>>>>> b35aecdc772a565a47a78d9c40f27a75b9099498
};

export default ConditionalRendering;
