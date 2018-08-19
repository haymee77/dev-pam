const express = require('express');
const passport = require('passport');
const router = express.Router();

console.log("start GET request..");

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

console.log("end GET..");

router.use('/', (req, res) => {
    res.write("<h1>dev test file..</h1>");
});

module.exports = router;