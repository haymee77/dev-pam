const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);

module.exports = db;


/*

const config = require('../config/env');
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
    freezeTableName: true,
    createdAt: 'created_dt',
    updatedAt: 'updated_dt'
});

module.exports = {
    sequelize: sequelize,
    User: User
}
*/