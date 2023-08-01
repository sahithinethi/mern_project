import React, { useState } from 'react'
import Main from "./main"
import Avtar from "../assets/images/avatar.svg"
import Bg from "../assets/images/bg.svg"
import Wave from "../assets/images/wave.png"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/style.css";
import {registerfunction} from "../services/Apis";
// import { NavLink } from 'react-router-dom'
function Login() {
  
const navigate=useNavigate();
  const [inputdata,setInputdata]=useState({
    uname:"",
    email:"",
    pass:""
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setInputdata({...inputdata,[name]:value})
  }



// register data

const handleSubmit=async(e)=>{
  e.preventDefault();
  const {uname,email,pass}=inputdata;
  // console.log(uname,email,pass);
  if (uname === ""){
    toast.error("enter the username");
  }
  else if (email === ""){
    toast.error("enter email");
  }
  else if(!email.includes("@")){
    toast.error("enter the vaid emial"); 
  }

  else if (pass === ""  ){
    toast.error("enter the pass");
  }
  else if(pass.length<8){
    toast.error("pass must be more than 8 charachters");
  }
  else if(pass.includes(uname)){
    toast.error("pass doesnot contain the uname");
  }
  else{
    const response =await registerfunction(inputdata);
    if (response.status === 200){
      setInputdata({...inputdata,uname:"",email:"",pass:""});
      navigate("/login");
      toast.success("sucessfully logged in");
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
  <input type="text" class="form-control" name='uname' placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange} />
</div>
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">email</span>
  <input type="email" class="form-control" name='email' placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange}/>
</div>
<div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">password</span>
  <input type="password" class="form-control" name='pass' placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange}/>
</div>
                   
           		
            	{/* <a href="#" style={{float:"right" ,padding:"20px"}}>Forgot Password?</a> */}
				<a  href="#" style={{float:"none",padding:"20px"}}><NavLink to="/login">Already registered?</NavLink></a>
                {/* <a href="#" style={{float:"right",padding:"20px"}}>Signup</a> */}
                <button className='btn' onClick={handleSubmit}>Signup</button>
            	{/* <input type="submit" class="btn" value="Login"/> */}
            </form>
            
        </div>
        <ToastContainer/>
    </div>
    <script type="text/javascript" src={Main}></script>
    </div>
  )
}

export default Login
