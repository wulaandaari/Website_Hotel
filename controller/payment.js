const Payment = require("../models/payment");

const payBooking = async (req,res) => {
    const {amount} = req.query;
    const {bookingId} = req.params;
    const userId =  req.session.user.id;
    try {
      await Payment.create({amount, user_id: userId, book_id: bookingId});
      res.redirect('/');
    } catch (error) {
      res.redirect(`/payment/${bookingId}`);
    }
}

module.exports = {payBooking}

