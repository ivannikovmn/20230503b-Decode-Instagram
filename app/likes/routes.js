const express = require('express')
const router = express.Router();
const passport = require('passport')
const {createLike, deleteLike} = require('./contollers')
const {isAuthorOfLike} = require('./middlewares')

router.post('/api/likes', passport.authenticate('jwt', { session: false }), createLike)
router.delete('/api/likes/:id', passport.authenticate('jwt', { session: false }), isAuthorOfLike, deleteLike)

module.exports = router;