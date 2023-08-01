import { commonrequest } from "./ApiCall";
import { BACKEND_URL } from "./helper";


export const registerfunction =async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/register`,data);
}


export const sentOtpFunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/sendotp`,data)
}


export const userVerify = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/login`,data)
}


export const eventaddition = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/Event/add`,data)
}


export const  eventshow = async(data)=>{
    console.log(data);
    return await commonrequest("POST",`${BACKEND_URL}/Events/show_all`,data);
}

