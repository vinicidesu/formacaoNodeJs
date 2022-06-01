const Sequelize = require("sequelize");

const connection = new Sequelize('guiaperguntas', 'root', 'Shibare123@', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;