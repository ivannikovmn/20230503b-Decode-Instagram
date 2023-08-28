const express = require('express')
const router = express.Router();
const passport = require('passport')
const {createComment, deleteComment, getIdpoststoryComments} = require('./contollers')
const {isAuthorOfComment} = require('./middlewares')

router.post('/api/comments', passport.authenticate('jwt', { session: false }), createComment)
router.delete('/api/comments/:id', passport.authenticate('jwt', { session: false }), isAuthorOfComment, deleteComment)
router.get('/api/comments/byIdPostStory/:idpoststory', passport.authenticate('jwt', { session: false }), getIdpoststoryComments)

module.exports = router;