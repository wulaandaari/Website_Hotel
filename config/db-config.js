const { Sequelize } = require('sequelize');

const config = new Sequelize({
    dialect: "mysql",
    host:"localhost",
    username: "root",
    password:"",
    database: "hotel",
})

module.exports = config;