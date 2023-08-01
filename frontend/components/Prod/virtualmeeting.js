import meta2 from "./images/virtual.jpg";
import Container from "@mui/material/Container";
import videobackground from "./videos/virtualmeeting.mp4";
import Form from "../Form";

export default function Metaverse(){
    return (
        <>
        <main>
            <img src={meta2}  width="1515px" height="750px"/>
            <div className="content" style={{position:"absolute",width:"1519px",height:"509px",top:"90px",bottom:"60px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white"}}>
            <h1 style={{fontSize:"100px",fontWeight: "bolder",color:"#ff3399"}}>Virtual Conference Platform</h1>
        </div>
        </main>
        <Container>
            <header style={{textAlign:"center",fontSize:"60px"}}>Go Global with Engaging Virtual Conferences</header>
            {/* <header style={{textAlign:"center",fontSize:"40px",color:"blueviolet"}}>The Boys</header> */}
            <header style={{textAlign:"center",fontSize:"20px",color:"blueviolet"}}>Establish engaging activities, interactive webinars, and intuitive networking opportunities to keep attendees amazed and delighted during your event. With the ibentos virtual conference, access the entire world of attendees at your fingertips.</header>
        </Container>
        <div className="container text-center">
  <div className="row">
    <div className="col-sm-14"><video src={videobackground} autoPlay loop muted   style={{ width:"1200px" , height:"600px",objectFit:"cover"}} /></div>
    
  </div>
  </div>
  <Container>
    <header style={{textAlign:"center",fontSize:"60px"}}>Reasons to Hold a Virtual Conference</header>
    <p style={{textAlign:"center",fontSize:"20px",color:"blueviolet"}}>The ideal setting for hosting webinars, interacting, exchanging ideas, and igniting engaging conversations with like-minded individuals from around the globe is an online conference, which you, your partners, sponsors, and attendees can all participate in. By eliminating the need to travel, you can reach a larger audience for a fraction of the price of in-person conferences while still getting amazing results!</p>

  </Container>
  <Form/>
        </>
    );
}