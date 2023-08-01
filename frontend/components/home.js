import React from 'react'
import style from "./styles/nav.css"
import style2 from "./styles/swiper.css"
import Swiper from "swiper"
import videobackground from "../assets/videos/videobackground.mp4"
import Img from "../assets/images/1.jpg"
import Img1 from "../assets/images/R.jpg"
import Img2 from "../assets/images/Y.jpg"
import Img3 from "../assets/images/T.jpg"
import { NavLink,useNavigate,Link } from 'react-router-dom'
import { Button } from '@mui/material'

function Nav() {
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.removeItem('userdbtoken');
    navigate("/login");
  }

  let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
       return (
    <div>
      <head>
    <link rel="stylesheet" type="text/css" href={style}/>
    <link rel="stylesheet" type="text/css" href={style2}/>

</head>

  <section class="home">
    <div class="media-icons">
      <a href="#"><i class="uil uil-facebook-f"></i></a>
      <a href="#"><i class="uil uil-instagram"></i></a>
      <a href="#"><i class="uil uil-twitter"></i></a>
    </div>

  <div className="main" >
    <video src={videobackground} autoPlay loop muted   style={{ width:"1519px" , height:"700px",objectFit:"cover"}} />
        <div className="content" style={{position:"absolute",width:"1519px",height:"509px",top:"90px",bottom:"60px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white"}}>
            <h1 style={{fontSize:"40px",fontWeight: "bolder"}}>Create Extraordinary Brand Experiences</h1><p style={{fontSize:"30px",fontWeight:"bold"}}>
The most comprehensive platform for all your Metaverse, Virtual & Hybrid events</p>
        </div>
    
    </div>
</section>

  <section class="about section">
    <h2>Fetures of the Website</h2>
    <p>Dynamic Navigation</p>
    <br/>
    <p>Pay as you Utilize</p>
    <br/>
    <p>No direct contact</p>
    <br/>
    <p>Used JWT Token for Authentication</p>
    <br/>
    <p>Session Management</p>
    <br/>
    <p>Password Hashing using Bycryptjs</p>
    <br/>
    <p>Used NodeMailer send the mail</p>
    <br/>
    <p>Used Otp Login instead of password for High Security</p>
    <br/>
    <p>Used JWT Token for Authentication</p>
    <br/>
    <p>Used Stripe for Payment MOdule --- real time payments</p>

  </section>
    </div>
  )
    } else {
      return (
        <div>
    
    
      <section class="home">
        <div class="media-icons">
          <a href="#"><i class="uil uil-facebook-f"></i></a>
          <a href="#"><i class="uil uil-instagram"></i></a>
          <a href="#"><i class="uil uil-twitter"></i></a>
        </div>
    
      <div className="main" >
        <video src={videobackground} autoPlay loop muted   style={{ width:"1519px" , height:"700px",objectFit:"cover"}} />
            <div className="content" style={{position:"absolute",width:"1519px",height:"509px",top:"90px",bottom:"60px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white"}}>
                <h1 style={{fontSize:"40px",fontWeight: "bolder"}}>Create Extraordinary Brand Experiences</h1><p style={{fontSize:"30px",fontWeight:"bold"}}>
    The most comprehensive platform for all your Metaverse, Virtual & Hybrid events</p>
            </div>
        
        </div>
    </section>
    
      <section class="about section">
        {/* <h2>Seasons of the year</h2> */}
        <h1>Fetures of the Website</h1>
    <h3 > Dynamic Navigation</h3>
    <br/>
    <h3 >Pay as you Utilize</h3>
    <br/>
    <h3>No direct contact</h3>
    <br/>
    <h3>Used JWT Token for Authentication</h3>
    <br/>
    <h3>Session Management</h3>
    <br/>
    <h3>Password Hashing using Bycryptjs</h3>
    <br/>
    <h3>Used NodeMailer send the mail</h3>
    <br/>
    <h3>Used Otp Login instead of password for High Security</h3>
    <br/>
    <h3>Used JWT Token for Authentication</h3>
    <br/>
    <h3>Used Stripe for Payment MOdule --- real time payments</h3>

      </section>
        </div>
      )
    }
  }
    

export default Nav;
