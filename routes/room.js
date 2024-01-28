const express = require("express");
const { register, login } = require("../controller/auth");
const { createRoom } = require("../controller/room");

const router =  express.Router();

router.get("/create", createRoom);

module.exports = router;