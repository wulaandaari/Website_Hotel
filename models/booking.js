const { DataTypes } = require("sequelize");
const config = require("../config/db-config");
const User = require("./users");
const Room = require("./room")


const Booking = config.define("booking", {
    check_in: {
        type: DataTypes.DATE,
    },
    check_out: {
        type: DataTypes.DATE
    },
})

User.hasMany(Booking, {
    as: "booking",
    foreignKey: "user_id",
})

Booking.belongsTo(User, {
   foreignKey: "user_id",
})

Room.hasOne(Booking, {
    as: "booking",
    foreignKey: "room_id"
})

Booking.belongsTo(Room, {
    foreignKey: "room_id"
})

module.exports = Booking;