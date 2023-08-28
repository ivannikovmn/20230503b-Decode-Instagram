const express = require('express')
const router = express.Router();
const passport = require('passport')
const {createComment, deleteComment} = require('./contollers')
const {isAuthorOfComment} = require('./middlewares')

router.post('/api/comments', passport.authenticate('jwt', { session: false }), createComment)
router.delete('/api/comments/:id', passport.authenticate('jwt', { session: false }), isAuthorOfComment, deleteComment)

module.exports = router;