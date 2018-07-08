const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/users.controller');

/* GET users listing. */
router.get('/', controller.index);

router.get('/:id', controller.show);

router.delete('/:id', controller.destroy);

router.post('/', controller.create);

module.exports = router;