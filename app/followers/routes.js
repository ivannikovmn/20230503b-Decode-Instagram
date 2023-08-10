const express = require('express')
const router = express.Router();
const passport = require('passport')
const {createFollower, getUsernameFollowers, deleteFollower, getUsernameFollowed} = require('./contollers')
const {validateFollower} = require('./middlewares')

router.post('/api/followers', passport.authenticate('jwt', { session: false }), validateFollower, createFollower)
router.get('/api/followers/byUsername/:username', passport.authenticate('jwt', { session: false }), getUsernameFollowers)
router.delete('/api/followers/:id', passport.authenticate('jwt', { session: false }), deleteFollower)
router.get('/api/followed/byUsername/:username', passport.authenticate('jwt', { session: false }), getUsernameFollowed)

module.exports = router;