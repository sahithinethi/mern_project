const router = require('express').Router();
let Event = require('../models/eventSchema');

router.route('/add').post(async (req, res) => {
 
  const email = req.body.email;
  const typeofevent=req.body.typeofevent;
  const date=req.body.date;
  console.log(email,typeofevent,date);
  const newEvent = new Event({
    email,
    typeofevent,
    date,
  }); 
  
  try{
    let eve =  await Event.findOne({date:date});
    console.log(eve);
    if(eve === null){
        newEvent.save();
        return res.json({sucess:true});    
    }    
    return res.json({sucess:false,err:false});
  }
  catch(errors){
    console.log(errors);
    res.json({sucess:false,err:true});
  }
});

router.post('/show_all', async (req, res) => {
  const email = req.body.email;

  try {
    const data = await Event.find({ email: email });
    if (data.length === 0) {
      return res.status(404).json({ message: 'No events found for this email' });
    }
    return res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
