const express = require('express');

const project = require('../constants/project');

const user = require('./user/user.routes');
const auth = require('./auth/auth.routes');
const category = require('./category/category.routes');
const subscribe = require('./subscribe/subscribe.routes');
const purchase = require('./purchase/purchase.routes');
const listitem = require('./listitem/listitem.routes');
const list = require('./list/list.routes');
const upload = require('./upload/upload.routes');

const router = express.Router();

router.use('/user', user);
router.use('/auth', auth);
router.use('/category', category);
router.use('/subscribe', subscribe);
router.use('/purchase', purchase);
router.use('/listitem', listitem);
router.use('/list', list);
router.use('/upload', upload);

module.exports = router;