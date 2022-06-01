const Sequelize = require("sequelize");

const connection = new Sequelize('guiaperguntas', 'root', 'SENHA', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;