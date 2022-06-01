const Sequelize = require('sequelize');
const connection = require('./database');

//define os campos e tipos da tabela.
const Pergunta = connection.define('pergunta', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//false: não vai forçar a criação da tabela caso ela exista.
Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;