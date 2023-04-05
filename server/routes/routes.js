const router = require('express').Router();
const { addEvent } = require('../controllers/Events/addEvent');
const { addUser } = require('../controllers/Users/addUser')

router.post('/users', addUser)
router.post('/event', addEvent)
module.exports = router;