// import style from "./style.css"
import {json, Link,useNavigate} from "react-router-dom"; 
import {useState} from 'react'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { eventaddition } from "../services/Apis";
// import Spinner from 'react-bootstrap/Spinner';
// import React, { useState } from 'react'
import Main from "./main"
import Avtar from "../assets/images/avatar.svg"
import Bg from "../assets/images/bg.svg"
import Wave from "../assets/images/wave.png"
import  "./styles/style.css"
import { Await, NavLink } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { sentOtpFunction } from '../services/Apis'
// import Spinner from 'react-bootstrap/Spinner';

function Form (){ 
  const [spiner,setSpiner] = useState(false);
  const a=window.localStorage.getItem("userdbtoken"); 
  const navigate= useNavigate(""); 
    const [event,setevent]=useState(''); 
    const [date,setdate]=useState(''); 
 const handleSubmit = async (e) => { 
     
    if (localStorage.getItem("userdbtoken")){ 
      alert("First login then u can book your event"); 
      navigate("/login"); 
    } 
    console.log(window.localStorage.user)
    const email=JSON.parse(window.localStorage.getItem("user")).data.email 
  e.preventDefault(); 
  try { 
    const res = await fetch("http://localhost:4002/Event/add", { 
   method: "POST", 
   headers: { 
     "Content-Type": "application/json", 
   }, 
   body: JSON.stringify({ email: email, typeofevent: event,date:date }), 
    }); 
    const js = await res.json(); 
    console.log(js.sucess); 
    if (js.sucess===false && js.err===true) { 
   alert("user not logged in") 
      navigate("/login"); 
    } 
      else if(js.sucess===false && js.err===false){ 
        alert("date is already booked kindly please choose another date"); 
      } 
    else{ 
   alert("Congratulations u have succefully booked "); 
   navigate("/Profile"); 
    } 
  }  
  catch (err) { 
    console.log(err); 
  } 
  setevent(""); 
  setdate(""); 
   }; 
 
   const handle=async(e)=>{
    if (!localStorage.getItem("userdbtoken")){ 
      alert("First login then u can book your event"); 
      navigate("/login"); 
    }

    e.preventDefault();
    if(event === ""){
      toast.error("enter the event dtails");
    }
    else if(date === ""){
      toast.error("enter the date");
    }
    else{
      setSpiner(true);
      toast.success("we are processing your request");
      console.log(localStorage.getItem("user"));
      const data = {
        email: JSON.parse(window.localStorage.getItem("user")).email,
        event: event,
        date:date
      }
      const response = await eventaddition(data);
      if (response.status === 200) {
        setSpiner(false);
        toast.success("sucessfully booked your event");
        navigate("/Payment");
      }
      else{
        toast.error(response.response.data.error);
      }
    }

   }
   return (
    <div>
        
      <img class="wave" src={Wave}/>
	<div class="container">
		<div class="img">
			<img src={Bg}/>
		</div>
		<div class="login-content">
			<form>
				<img src={Avtar}/>
				<h2 class="title">Welcome</h2>
        <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" name='event' placeholder="event type" aria-label="event" aria-describedby="addon-wrapping" onChange={(e)=>setevent(e.target.value) }/>
</div>
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">email</span>
  <input type="email" class="form-control" name='date' placeholder="date" aria-label="date" aria-describedby="addon-wrapping" onChange={(e)=>setdate(e.target.value) }/>
</div>

                   
           		
            	{/* <a href="#" style={{float:"right" ,padding:"20px"}}>Forgot Password?</a> */}
				{/* <a  href="#" style={{float:"none",padding:"20px"}}><NavLink to="/login">Already registered?</NavLink></a> */}
                {/* <a href="#" style={{float:"right",padding:"20px"}}>Signup</a> */}
                <button className='btn' onClick={handle}>Book</button>
            	{/* <input type="submit" class="btn" value="Login"/> */}
            </form>
            
        </div>
        <ToastContainer/>
    </div>
    <script type="text/javascript" src={Main}></script>
    </div>
  )
}
 export default Form;