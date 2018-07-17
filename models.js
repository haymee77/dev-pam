const Sequelize = require('sequelize');
const sequelize = new Sequelize('PAM', 'api', 'clxhtm&5298', {
    host: '13.125.246.193',
    dialect: 'mysql'
});

const User = sequelize.define('USERS', {
    name: Sequelize.STRING
}, {
    freezeTableName: true
});

module.exports = {
    sequelize: sequelize,
    User: User
}