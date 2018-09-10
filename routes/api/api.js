const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/oauth', require('./oauth'));
router.use("/courses", require("./courses"));

module.exports = router;
