const Sequelize = require("sequelize");

const connection = new Sequelize('guiaperguntas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;