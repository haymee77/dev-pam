var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/*", function(req, res) {
  // Router => Angular (Front-end)
  res.sendFile(path.join(__dirname, "views/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = router;
