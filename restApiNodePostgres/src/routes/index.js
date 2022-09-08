const { Router, application } = require('express');
const router = Router();

const { getUsers } = require('../controllers/index.controller')
 

router.get('/users', getUsers)

module.exports = router;