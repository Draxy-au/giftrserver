const express = require('express');

const project = require('../constants/project');

const user = require('./user/user.routes');
const auth = require('./auth/auth.routes');
const category = require('./category/category.routes');
const subscribe = require('./subscribe/subscribe.routes');


const router = express.Router();

router.use('/user', user);
router.use('/auth', auth);
router.use('/category', category);
router.use('/subscribe', subscribe);

 
module.exports = router;