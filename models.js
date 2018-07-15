const Sequelize = require('sequelize');
const sequelize = new Sequelize('PAM', 'root', 'clxhtm&5298');

const User = sequelize.define('USER_TB', {
    NAME: Sequelize.STRING
});

module.exports = {
    sequelize: sequelize,
    User: User
}