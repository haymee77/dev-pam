const express = require("express");
const router = express.Router();
const controller = require("../../controllers/api/courses.controller");

/* GET users listing. */
router.get("/", controller.index);

router.get("/:id", controller.show);

router.get("/steps/:id", controller.showContent);

router.get("/steps/examples/:id", controller.showContentExample);

module.exports = router;
