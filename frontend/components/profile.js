import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { eventshow } from "../services/Apis";

export default  function Profile() {
    
    const a=window.localStorage.getItem("login")
    let c,b,d;
    if( a ===  "true"  ){
        try{
             c= JSON.parse(window.localStorage.getItem("user"));
            console.log(c);
             b=c.email;
  return (
    <div>
    <h1>Logged in as </h1>
    <h2> {b} </h2>

    <center><a><Link to="/Events">Events</Link></a></center>
    </div>
  )
    }
    catch(e){
        alert(e);
    }
}
    else{
        return (
        <h1>Login first to see your profile</h1>
        )
    }
}


