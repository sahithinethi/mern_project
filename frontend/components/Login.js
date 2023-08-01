import React, { useState } from 'react'
import Main from "./main"
import Avtar from "../assets/images/avatar.svg"
import Bg from "../assets/images/bg.svg"
import Wave from "../assets/images/wave.png"
import  "./styles/style.css"
import { Await, NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sentOtpFunction } from '../services/Apis'
import Spinner from 'react-bootstrap/Spinner';
function Login() {
	const navigate=useNavigate();
	const [email,setEmail]=useState("");
	const [spiner,setSpiner] = useState(false);

const sendOtp=async(e)=>{
	e.preventDefault();
	if(email === ""){
		toast.error("enter your email");
	}
	else if(!email.includes("@")){
		toast.error("Enter valid email");
	}
	else{
		setSpiner(true);
		toast.success("login sucess");
		const data = {
			email: email
		}
		const response= await sentOtpFunction(data);
		if (response.status === 200){
			setSpiner(false)
			toast.success("sucessfully otp sended");
			navigate("/user/otp",{state:email})
		}
		else{
			toast.error(response.response.data.error);
		}
		// console.log(response);
	}
}



  return (
    <div>
		<head>
    {/* <link rel="stylesheet" type="text/css" href={style}/> */}
        </head>
		
      <img class="wave" src={Wave}/>
	<div class="container">
		<div class="img">
			<img src={Bg}/>
		</div>
		<div class="login-content">
			<form>
				<img src={Avtar}/>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Email</h5>
           		   		<input type="email" class="input" onChange={(e)=>setEmail(e.target.value)}/>
           		   </div>
           		</div>
           		
            	{/* <a href="#" style={{float:"right" ,padding:"20px"}}>Forgot Password?</a> */}
				<a  href="#" style={{float:"none",padding:"20px"}}><NavLink to="/register">Not regestered yet?</NavLink></a>
                {/* <a href="#" style={{float:"right",padding:"20px"}}>Signup</a> */}
                <button className='btn' onClick={sendOtp}>Login
				{
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
				</button>
            	{/* <input type="submit" class="btn" value="Login"/> */}
            </form>
            
        </div>
		<ToastContainer />
    </div>
    <script type="text/javascript" src={Main}></script>
    </div>
  )
}

export default Login
