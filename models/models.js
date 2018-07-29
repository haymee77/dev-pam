const config = require('./config/env');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password,
    {
        host: config.mysql.host,
        dialect: config.mysql.dialect
    }
);

const User = sequelize.define('USERS', {
    name: Sequelize.STRING
}, {
    freezeTableName: true
});

module.exports = {
    sequelize: sequelize,
    User: User
}