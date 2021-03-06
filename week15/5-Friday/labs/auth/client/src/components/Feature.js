import React from "react";
import requireAuth from '../requireAuth';



const Feature = () => {

    //logic
  //check for auth inside of redux

  return <div style={{height: "100vh"}} className="d-flex flex-column justify-content-center align-items-center">
  <h1 className="text-white">Feature Page</h1>


  <h3 className="text-warning">This is a protected page</h3>
  <h5 className="text-info">This page should only be seen if user is logged in</h5>
 </div>
};

export default requireAuth(Feature);
