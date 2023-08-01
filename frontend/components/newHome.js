import videobackground from "../assets/videos/videobackground.mp4";
import Paper from '@mui/material/Paper';
import React from 'react';
import Container from '@mui/material/Container';
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import BroadcastOnHomeSharpIcon from '@mui/icons-material/BroadcastOnHomeSharp';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import HandshakeIcon from '@mui/icons-material/Handshake';
import img4 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img1 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
// import img8 from '../assets/images/8.jpg';
import Form from './Form';
import {Link} from 'react-router-dom';
import Nav from "./navbar";
export default function Home(){
    return (
      
        <div className="Home">
          {/* <Nav/> */}
        <div className="main" >
    <video src={videobackground} autoPlay loop muted   style={{ width:"1519px" , height:"700px",objectFit:"cover"}} />
        <div className="content" style={{position:"absolute",width:"1519px",height:"509px",top:"90px",bottom:"60px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white"}}>
            <h1 style={{fontSize:"100px",fontWeight: "bolder"}}>Create Extraordinary Brand Experiences</h1><p style={{fontSize:"60px",fontWeight:"bold"}}>
The most comprehensive platform for all your Metaverse, Virtual & Hybrid events</p>
        </div>
    
    </div>
    
<Container fixed >
<div className="head" style={{textAlign:"center",fontfamily: "papyrus"}} ><h1 style={{fontfamily: "papyrus , Fantasy"}}>Products</h1></div>
<main>
<div className="row" style={{padding:"15px"}}>
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
      <BroadcastOnHomeSharpIcon style={{height:"100px",width:"100px",justifyContent:"center"}}/>
        <h5 className="card-title">Metaverse</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/" className="btn btn-error"style={{textDecoration:"None"}}><Link to="/Products/Metaverse">Take me there</Link></a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      <HandshakeIcon style={{height:"100px",width:"100px",justifyContent:"center"}}/>
        <h5 className="card-title">VirtualConference</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/" className="btn btn-error" style={{textDecoration:"None"}}><Link to="/Products/Virtualmeeting" >Take me there</Link></a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      <ConnectWithoutContactIcon style={{height:"100px",width:"100px",justifyContent:"center"}}/>
        <h5 className="card-title">Virtual Exhibitions</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/" className="btn btn-error" style={{textDecoration:"None"}}><Link to="/Products/Virtualexhibition">Take me there</Link></a>
      </div>
    </div>
  </div>
</div>


</main>
</Container>
<Container style={{paddingBottom:"10px"}}>
    <div className="Slider">
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 4"></button>

    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 9"></button>
    
  </div>
  < div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..." height="800px" width="500px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" >
      <img src={img2} className="d-block w-100" alt="..." height="800px" width="500px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." height="800px" width="500px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..." height="800px" width="500px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img5} className="d-block w-100" alt="..." height="800px" width="500px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src={img6} className="d-block w-100" alt="..."height="800px" width="500px" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img7} className="d-block w-100" alt="..." height="800px" width="500px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img8} className="d-block w-100" alt="..." height="800px" width="500px"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    {/* < div className="carousel-item">
     
      <img src={img9} className="carousel-caption d-none d-md-block" alt="...">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </img>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

</Container>
<h1 style={{textAlign:"center"}}>OUR MAIN FEATURES</h1>
<Container fixed style={{padding:"20px",color:"black"}}>
<div class="d-flex justify-content-center">
<div class="p-2" style={{padding:"20px"}}><Paper elevation={4} variant="outlined" square  /><div className="head"><AutoAwesomeSharpIcon style={{height:"100px",width:"100px",justifyContent:"center"}}/></div> <main><h1>Integration with <br/>all Standard <br/>Meeting <br/>Platforms​​</h1></main></div>
<div class="p-2"><Paper elevation={12}  variant="outlined" square /><div className="head"><AutoAwesomeSharpIcon style={{height:"100px",width:"100px",justifyContent:"center"}}/></div> <main><h1>Pay As You Utilize</h1></main> </div>
<div class="p-2"><Paper elevation={12} variant="outlined" square  /> <div className="head"><AutoAwesomeSharpIcon style={{height:"100px",width:"100px",justifyContent:"center"}}/></div> <main><h1>No Direct contact</h1></main></div>
</div>
  </Container>
  <Form/>
        </div>
    );
}
