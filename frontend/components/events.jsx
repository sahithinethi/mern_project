import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { eventshow } from '../services/Apis';
function ShowAll() {
  // const [email, setEmail] = useState('');
  const [events, setEvents] = useState([]);
  // const [errorMessage, setErrorMessage] = useState('');

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:4002/Event/show_all', { email:JSON.parse(window.localStorage.getItem("user")).email });
  //     setEvents(response.data.data);
  //     // setErrorMessage('');
  //   } catch (error) {
  //     setEvents([]);
  //     // setErrorMessage(error.response.data.message);
  //   }
  // };

  
  const handle = async(e)=>{
    e.preventDefault();
      const res = await eventshow({ email:JSON.parse(window.localStorage.getItem("user")).email});
      console.log(res);
      if(!res.status === 404){
        setEvents(res.data.data);
        toast.success("sucessfully retrived");
      }
      else{
        // toast.error(res.res.data.error);
        console.log(localStorage.getItem("user"));
        // setEvents([]);
        // setErrorMessage(res.res.data.error);
        
      }
  }
  return (
    
    <div>
      <ToastContainer />
    <button type='sucess' onClick={handle}>get details</button>
      {events.length > 0 &&
        <ul>
          {events.map(event => (
            <li key={event._id}>

              <p>{event.typeofevent}</p>
              <p>{event.date}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default ShowAll;
