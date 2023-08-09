const express = require('express')
const router = express.Router();
const passport = require('passport')
const {createFollower, deleteFollower} = require('./contollers')
const {validateFollower} = require('./middlewares')

router.post('/api/followers', passport.authenticate('jwt', { session: false }), validateFollower, createFollower)
router.delete('/api/followers/:id', passport.authenticate('jwt', { session: false }), deleteFollower)

module.exports = router;