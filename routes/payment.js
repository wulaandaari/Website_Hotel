const express = require("express");
const { payBooking } = require("../controller/payment");

const router =  express.Router();
router.post("/:bookingId", payBooking);


module.exports = router;
