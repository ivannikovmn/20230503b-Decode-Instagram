const express = require('express')
const router = express.Router();
const {
    createResume, getMyResumes, getUsernameResumes, getAllResumes, getAllResumesBefore24hours, getResume, deleteResume, editResume,
    createStory, deleteStory } = require('./contollers')
const {isClient} = require('../auth/middlewares')
const passport = require('passport')
const {validateResume, isAuthorOfResume} = require('./middlewares')

// router.post('/api/resume', passport.authenticate('jwt', { session: false }), isEmployee, validateResume, createResume)
router.post('/api/posts', passport.authenticate('jwt', { session: false }), isClient, validateResume, createResume)
router.get('/api/posts/my', passport.authenticate('jwt', { session: false }), isClient, getMyResumes)
router.get('/api/posts', passport.authenticate('jwt', { session: false }), isClient, getAllResumes)

router.get('/api/posts/byUsername/:username', passport.authenticate('jwt', { session: false }), isClient, getUsernameResumes)

router.get('/api/post/:id', passport.authenticate('jwt', { session: false }), getResume)
router.delete('/api/post/:id', passport.authenticate('jwt', { session: false }), isClient, isAuthorOfResume, deleteResume) 
router.put('/api/post', passport.authenticate('jwt', { session: false }), isClient, isAuthorOfResume, validateResume, editResume) 

router.post('/api/story', passport.authenticate('jwt', { session: false }), isClient, createStory)
router.get('/api/resumesBefore24hours', passport.authenticate('jwt', { session: false }), isClient, getAllResumesBefore24hours)
router.delete('/api/story', passport.authenticate('jwt', { session: false }), isClient, deleteStory)

module.exports = router;