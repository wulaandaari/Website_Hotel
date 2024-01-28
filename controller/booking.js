const Booking = require("../models/booking");

const bookingRoom = async (req,res) => {
    const {checkIn, checkOut} = req.body;
    const userId = req.session.user.id;
    const {roomId} = req.params;
    try {
        const data = await Booking.create({check_in: checkIn, check_out:checkOut, user_id: userId, room_id:roomId })
        res.redirect(`/payment/${data.id}`);
    } catch (error) {
        console.log(error)
        res.redirect(`/book/${roomId}`)
    } 
}

module.exports = {bookingRoom};