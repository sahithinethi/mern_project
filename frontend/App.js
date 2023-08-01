
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import Navbar from "./Components/home"
import Error from "./Components/error"
import Otp from './Components/otp';
import Dashboard from './Components/dashboard';
import Nav from "./Components/navbar";
import {Routes,Route} from "react-router-dom";
import Products from "./Components/Products";
import Meta from "./Components/Prod/virtualexhibition"
import Meta2 from "./Components/Prod/virtualmeeting"
import Meta3 from "./Components/Prod/Metaverse";
import Form from "./Components/Form";
// import Nav from "./Components/navbar";
import Event from "./Components/events";
import * as React from 'react';
import Processing from "./Components/processing"
// import {Routes} from "react-router-dom";
import Profile from "./Components/profile";
import Payment from "./Components/Payment";
import Payment_Sucess from "./Components/payment_success"
import NewLogin from "./Components/newHome";
function App() {
  // localStorage.removeItem("userdbtoken")
  return (
    <>
    {/* <Nav/> */}
    {/* <Login/>
    <Signup/> */}
  
    <Nav/>
    <Routes>
      <Route path="/home" element={<NewLogin/>}/>
    <Route path='/Payment' element={<Payment/>}/>
    <Route path='/Payment_Success' element={<Payment_Sucess/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='' element={<Navbar/>}></Route>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/user/otp' element={<Otp/>}/>
    <Route path="/Events"  element={<Event/>}/>
    <Route path="/Products"  element={<Products/>}/>
    <Route path="/Products/Virtualmeeting"  element={<Meta2/>}/>

    <Route path="/Products/Metaverse"  element={<Meta3/>}/>
    <Route path="/Products/Virtualexhibition"  element={<Meta/>}/>
    <Route path="/Book"  element={<Form/>}/>
    <Route path="/Profile" element={<Profile/>}/>

    {/* <Route path="/Register"  element={<Register/>}/> */}
    <Route path="/Processing" element={<Processing/>}/>
    
      <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  );
}

export default App;
