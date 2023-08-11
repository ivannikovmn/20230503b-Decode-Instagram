const express = require('express')
const router = express.Router();
const passport = require('passport')
const {createFollower, getUsernameFollowers, deleteFollower, createFollowed, getUsernameFollowed, getSuggestions} = require('./contollers')
const {validateFollower} = require('./middlewares')

router.post('/api/followers', passport.authenticate('jwt', { session: false }), validateFollower, createFollower)
router.get('/api/followers/byUsername/:username', passport.authenticate('jwt', { session: false }), getUsernameFollowers)
router.get('/api/followed/byUsername/:username', passport.authenticate('jwt', { session: false }), getUsernameFollowed)
router.delete('/api/followers/:id', passport.authenticate('jwt', { session: false }), deleteFollower)
router.put('/api/followers/accept/follower', passport.authenticate('jwt', { session: false }), createFollowed)
router.get('/api/suggestions/:userId', passport.authenticate('jwt', { session: false }), getSuggestions)

module.exports = router;