const express = require('express')
const router = express.Router();
const {SendVerificationEmail, verifyCode, editUser} = require('./contollers')

router.post('/api/auth/sendmail', SendVerificationEmail)
router.post('/api/auth/verifycode', verifyCode)
router.put('/api/auth/user', editUser) 

module.exports = router;