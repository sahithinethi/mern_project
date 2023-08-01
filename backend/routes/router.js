const express = require("express");
const router = new express.Router();

const controllers = require("../controllers/userControllers");
const eventcontrollers = require("../controllers/eventController");

// routes
router.post("/user/register",controllers.userregister);

router.post("/user/sendotp",controllers.userOtpSend);

router.post("/user/login",controllers.userLogin);

router.post("/Event/add",eventcontrollers.eventregister);

router.post("/Event/show_all",eventcontrollers.eventshow);




module.exports =router;
