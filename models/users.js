const { DataTypes } = require("sequelize");
const config = require("../config/db-config");


const User = config.define("users", {
    username: {
        type: DataTypes.STRING(30),
    },
    name: {
        type: DataTypes.STRING(50)
    },
    email : {
        type: DataTypes.STRING(30)
    },
    password: {
        type: DataTypes.STRING(25)
    },
    age: {
        type: DataTypes.INTEGER
    },
})
const extraxModel = async() => {
    await config.sync();
}

extraxModel();

module.exports = User;