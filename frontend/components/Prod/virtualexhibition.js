import meta2 from "./images/virtualex.jpg";
import Container from "@mui/material/Container";
import videobackground from "./videos/virtualexhibition.mp4";
import Form from "../Form";
export default function Metaverse(){
    return (
        <>
        
        <main>
            <img src={meta2}  width="1515px" height="750px"/>
            <div className="content" style={{position:"absolute",width:"1519px",height:"509px",top:"90px",bottom:"60px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white"}}>
            <h1 style={{fontSize:"100px",fontWeight: "bolder",color:"#e600e6"}}>Virtual Exhibition Platform</h1><p style={{fontSize:"60px",fontWeight:"bold",color:"#00ffff"}}>
The most comprehensive platform for all your Metaverse, Virtual & Hybrid events</p>
        </div>
        </main>
        <Container>
            <header style={{textAlign:"center",fontSize:"60px"}}>A Unique Virtual Exhibition Platform to Amaze the Global Audience</header>
            {/* <header style={{textAlign:"center",fontSize:"40px",color:"blueviolet"}}>Reasons to Host a Virtual Exhibition</header> */}
            <header style={{textAlign:"center",fontSize:"20px",color:"blueviolet"}}>The new-age brands need a new-age platform with flexible options for networking, establishing interaction, growing market reach, and more that will enable your exhibitors to showcase their goods and services affluently.</header>
        </Container>
        <div className="container text-center">
  <div className="row">
    <div className="col-sm-14"><video src={videobackground} autoPlay loop muted   style={{ width:"1200px" , height:"600px",objectFit:"cover"}} /></div>
    
  </div>
  </div>
  <Container>
    <header style={{textAlign:"center",fontSize:"60px"}}>Reasons to Host a Virtual Exhibition</header>
    <p style={{textAlign:"center",fontSize:"20px",color:"blue"}}>The global market is changing and growing wide at the pace of the universe, what you need is a perfect virtual exhibition platform that can help you showcase global brands, and their products, build a global network and connect with audiences worldwide. An ibentos virtual exhibition fair will boost brand visibility to further help you garner large sponsorship opportunities from around the world.</p>
  </Container>
  <Form/>
        </>
    );
}