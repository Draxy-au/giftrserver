const express = require('express');

const project = require('../constants/project');

const user = require('./user/user.routes');
const auth = require('./auth/auth.routes');


const router = express.Router();

router.use('/user', user);
router.use('/auth', auth);

 
module.exports = router;