const express = require('express');
const router = express.Router();

const eventController = require('../controllers/event');

router.post('/', eventController.create);
router.delete('/:id', eventController.delete);

module.exports = router;