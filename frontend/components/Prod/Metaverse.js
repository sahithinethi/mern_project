import meta2 from "./images/meta2.jpeg";
import Container from "@mui/material/Container";
import videobackground from "./videos/MetaversePlatform.mp4";
import Form from "../Form";
export default function Metaverse(){
    return (
        <>
        <div className="MAin">
            <img src={meta2}  width="1515px" height="750px"/>
            <div className="content" style={{position:"absolute",width:"1519px",height:"509px",top:"90px",bottom:"60px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"white"}}>
            <h1 style={{fontSize:"100px",fontWeight: "bolder",color:"black"}}>Metaverse Platform</h1><p style={{fontSize:"60px",fontWeight:"bold",color:"black"}}>
            Enabling Extraordinary Brand Experiences</p>
        </div>
        </div>
        <Container style={{backgroundcolor:"white"}}>
            <h1 style={{textAlign:"center",fontSize:"60px"}}>You know what they say about imash?</h1>
            <h1 style={{textAlign:"center",fontSize:"40px",color:"blueviolet"}}>"Best Metaverse Marketing Campaigns & Event Platform"</h1>
            <h3 style={{textAlign:"center",fontSize:"20px",color:"blueviolet"}}>Witness the era of incredible Web 3.0 innovation, the era of unlimited customization and unparalleled immersion; this is THE ERA BEYOND IMAGINATION. Welcome to the world of infinite possibilities, the world of ibentos Metaverse Platform. Don’t just see it, Live it!</h3>
        </Container>
        <div className="container text-center">
  <div className="row">
    <div className="col-sm-14"><video src={videobackground} autoPlay loop muted   style={{ width:"1200px" , height:"600px",objectFit:"cover"}} /></div>
  </div>
  </div>
  <Container>
    <h1 style={{textAlign:"center",fontSize:"60px"}}>MetaverseReasons to Begin Your Metaverse Campaign</h1>
    <p style={{textAlign:"center",fontSize:"20px",color:"blueviolet"}}>It’s Immersive, it’s engaging, it’s global, convenient, vivid, and trending, and IT IS THE FUTURE!. Metaverse is a world that stands at the crossroads of the virtual and real world, with the congruence of the best attributes of both. It’s futuristic and aims to deliver each business, a global platform to showcase its products and services at a handful price. Metaverse campaigns are an impressive way to bring in a diverse group of audience for extraordinarily well-curated campaigns for your business from anywhere in the world. The immersive experience that it offers helps you engage, interact and network with other brands from all over the world. The realistic 3D environments that can be created on the Metaverse allow you to build an unparalleled brand impression and acquire hefty sponsors. All these amazing results, reduction in overhead expenses, a larger audience, for a fraction of the price of an in-person brand campaign!</p>
  </Container>
<Form/>
        </>
    );
}
