const express = require('express')
const router = express.Router();
const passport = require('passport')
const {SendVerificationEmail, verifyCode, editUser, getUsernameUsers} = require('./contollers')

router.post('/api/auth/sendmail', SendVerificationEmail)
router.post('/api/auth/verifycode', verifyCode)
router.put('/api/auth/user', editUser) 
router.get('/api/auth/users/byUsername/:username', passport.authenticate('jwt', { session: false }), getUsernameUsers)

module.exports = router;