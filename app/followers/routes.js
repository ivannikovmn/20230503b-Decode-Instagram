const express = require('express')
const router = express.Router();
const {getAllFollowers, getFollowersByKey} = require('./contollers')

router.get('/api/followers', getAllFollowers)
router.get('/api/followers/:key', getFollowersByKey)

module.exports = router;