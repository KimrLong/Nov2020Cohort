import React, {useState, useEffect} from "react";

const ConditionalRendering = () => {

  const [isLoaded, setIsLoaded] = useState(false); //has out data loaded

  useEffect(()=>{

    setTimeout(()=>{
      //represents API call
      setIsLoaded(true);

    }, 3000)

  }, [])


if(!isLoaded){ //conditional rendering. condition renders if condition is false
  return <> Data is loading</>
}
else{
  return<> This is our main view</>
}
};

export default ConditionalRendering;
