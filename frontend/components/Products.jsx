import img4 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img1 from '../assets/images/4.jpg';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
export default function Products(){
    return (
        <>
        <hr className="featurette-divider"/>
        
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Metaverse<span className="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Witness the era of incredible Web 3.0 innovation, the era of unlimited customization and unparalleled immersion; this is THE ERA BEYOND IMAGINATION. Welcome to the world of infinite possibilities, the world of ibentos Metaverse Platform. Don’t just see it, Live it!</p>
            <Button variant="contained"><Link to="/Products/Metaverse" style={{textDecoration:"None",color:"yellow"}}>Checkout</Link></Button>
          </div>
          <div className="col-md-5">
            
            <img src={img1} className="d-block w-100" alt="..."/>
    
          </div>
        </div>
    
        <hr className="featurette-divider"/>
    
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Virtualexhibitions<span className="text-muted">A Unique Virtual Exhibition Platform to Amaze the Global Audience</span></h2>
            <p className="lead">The new-age brands need a new-age platform with flexible options for networking, establishing interaction, growing market reach, and more that will enable your exhibitors to showcase their goods and services affluently.
</p>
            <Button variant="contained"><Link to="/Products/Virtualexhibition" style={{textDecoration:"None",color:"yellow"}}>Checkout</Link></Button>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={img2} className="d-block w-100" alt="..."/>
          </div>
        </div>
    
        <hr className="featurette-divider"/>
    
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">VirtualMeeting <span className="text-muted">Go Global with Engaging Virtual Conferences</span></h2>
            <p className="lead">Establish engaging activities, interactive webinars, and intuitive networking opportunities to keep attendees amazed and delighted during your event. With the ibentos virtual conference, access the entire world of attendees at your fingertips.</p>
            <Button variant="contained"><Link to="/Products/Virtualmeeting" style={{textDecoration:"None",color:"yellow"}}>Checkout</Link></Button>
          </div>
          <div className="col-md-5">
            {/* <!-- <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> --> */}
            <img src={img3} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <hr className="featurette-divider"/>
           
    
        {/* <!-- /END THE FEATURETTES --> */}
    
        </>
    );
}