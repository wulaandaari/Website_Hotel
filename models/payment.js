const { DataTypes } = require("sequelize");
const config = require("../config/db-config");
const User = require("./users");
const Booking = require("./booking");


const Payment = config.define("payment", {
    amount: {
      type: DataTypes.DOUBLE
    }
})


User.hasMany(Payment, {
    as: "payments",
    foreignKey: "user_id"
})

Payment.belongsTo(User, {
    foreignKey: "user_id"
})

Booking.hasOne(Payment, {
    as: "payment",
    foreignKey: "book_id"
})

Payment.belongsTo(Booking, {
    foreignKey: "book_id"
})

module.exports = Payment;