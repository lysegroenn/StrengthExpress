const express = require('express');
const router = express.Router();
const Ctrl = require('./controller');

router.get('/test', Ctrl.test);
router.get('/testGet', Ctrl.testGet);
router.post('/add', Ctrl.addRecord);

module.exports = router;