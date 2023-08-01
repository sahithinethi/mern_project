const Event = require("../models/eventSchema");
const nodemailer = require("nodemailer");
const users = require("../models/userSchema");


exports.eventregister=async(req,res)=>{
    const email = req.body.email;
    const typeofevent=req.body.event;
    const date=req.body.date;

    if(!email || !typeofevent || !date){
        res.status(400).json({error:"please enter all the inputs"});

    } 
    try{
        const preevent= await users.findOne({email:email})
        if(!preevent){
            res.status(400).json({error:"user not found"});
        }
        else{
            const event=new Event({email,typeofevent,date});
            event.save();
            res.status(200).json({message:"Event sucessfully added"});
        }

    }
    catch(error){
        res.status(400).json({error:"invalid details",error});
    }


}

exports.eventshow=async(req,res)=>{
    const email=req.body;
    console.log(email);
    try {
        const data = await Event.find({ email: email });
        if (data.length === 0) {
          return res.status(404).json({ message: 'No events found for this email' });
        }

        return res.json({ data });
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Server error' });
      }

}
