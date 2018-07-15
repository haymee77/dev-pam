const express = require('express');
const router = express.Router();

router.use('/users', () => {
    require('./users');
    console.log('Pam listening on port 3000');
  
    require('../../models').sequelize.sync({force: true})
    .then(() => {
        console.log('Databases sync');
    });
});

module.exports = router;
