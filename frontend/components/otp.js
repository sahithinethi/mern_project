import React, { useState} from 'react'
import Main from "./main"
import Avtar from "../assets/images/avatar.svg"
import Bg from "../assets/images/bg.svg"
import Wave from "../assets/images/wave.png"
import "./styles/style.css"
import { Await, NavLink, useNavigate ,useLocation} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sentOtpFunction } from '../services/Apis'
import { userVerify } from '../services/Apis'

const Otp = () => {
  const [otp,setOtp]=useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your Otp")
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter Valid Otp")
    } else if (otp.length < 6) {
      toast.error("Otp Length minimum 6 digit")
    } else {
      const data = {
        otp, email: location.state
      }
      console.log(data)
     

      const response = await userVerify(data);
      if (response.status === 200) {
        localStorage.setItem("userdbtoken", response.data.userToken);
        toast.success(response.data.message);
        // localStorage.setItem("user",j{email:email});
        localStorage.setItem("login",true);
        localStorage.setItem("user",JSON.stringify({ email: location.state})) 
        setTimeout(() => {
          navigate("/");
        }, 1000)
      } else {
        toast.error(response.response.data.error)
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
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Otp</h5>
           		   		<input type="text" class="input" onChange={(e)=>setOtp(e.target.value)}/>
           		   </div>
           		</div>
           		
            	{/* <a href="#" style={{float:"right" ,padding:"20px"}}>Forgot Password?</a> */}
				{/* <a  href="#" style={{float:"none",padding:"20px"}}><NavLink to="/register">Not regestered yet?</NavLink></a> */}
                {/* <a href="#" style={{float:"right",padding:"20px"}}>Signup</a> */}
                <button className='btn' onClick={LoginUser}>Login</button>
            	{/* <input type="submit" class="btn" value="Login"/> */}
            </form>
            
        </div>
		<ToastContainer />
    </div>
    <script type="text/javascript" src={Main}></script>
    </div>
  )
}

export default Otp
