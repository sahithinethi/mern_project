import img from '../assets/images/why.jpg';
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
export default function Whyus(){
    return (
        <>
        <main>
        <Grid container spacing={2}>
        <Grid item xs={6}>
    <Item><img src={img} height="450px" width="750px"/></Item>
  </Grid>
  <Grid item xs={6}>
    <Item><main>
    imash is an Event Technology & Event Marketing Company that has extensive experience in working closely with Event Organisers across the globe. We are known in the Event Industry for delivering enriching experiences, spectacular results, and ROI-driven solutions to Event Organisers. As a result of our customers’ trust in us, we have been able to enable technology for 3000+ events and we take pride in becoming the pioneers of Event Technology in India. Right from providing Event Marketing solutions from 2010, to introducing RFID technology for physical events in 2012, Virtual Event Platform in 2020 and Metaverse Events in 2022, imash has been pivotal in helping the Event Industry in India take a big technological leap.

We are a team of 50+ enthusiastic professionals who are passionate about the very format of events. And this passion for events and our know-how gathered over a decade, make us stand out from the competition. We believe in delivering “Value” to our customers and the best way we have learnt to do this is by becoming their “Partners”. So, if you are looking for a vendor from whom you can get the job done, this website might not be relevant for you. But if you are looking for the right “Event Technology Partner” or “Event Marketing Partner”, who is with you as you take each step, to provide solutions as you face challenges and make sure that you get the desired ROI from your events, you are at the right place.
        </main></Item>
  </Grid>
  </Grid>
        </main>
        </>
    );
}