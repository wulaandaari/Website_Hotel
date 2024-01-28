const { DataTypes } = require("sequelize");
const config = require("../config/db-config");


const Room = config.define("rooms", {
    type: {
        type: DataTypes.STRING(30),
    },
    desc: {
        type: DataTypes.STRING(255)
    },
    price: {
        type: DataTypes.STRING(30)
    },
    image: {
        type: DataTypes.STRING(255)
    }
})

const extraxModel = async() => {
    await config.sync();
};

extraxModel();

module.exports = Room;