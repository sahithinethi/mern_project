import React from 'react'
import img from "../assets/images/paymentsuccess.jpg"
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
export default function Paymentsucess(){
    return (
        <>
        <main>
        <Grid container spacing={2}>
        <Grid item xs={6}>
    <Item><img src={img} height="450px" width="750px"/></Item>
  </Grid>
  <Grid item xs={6}>
    <Item><main>
        Payment sucess full
        </main></Item>
  </Grid>
  </Grid>
        </main>
        </>
    );
}