const express = require("express");
const { bookingRoom } = require("../controller/booking");

const router =  express.Router();
router.post("/:roomId", bookingRoom);


module.exports = router;