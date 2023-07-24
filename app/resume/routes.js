const express = require('express')
const router = express.Router();
const {
    createResume, getMyResumes, getAllResumes, getAllResumesBefore24hours, getResume, deleteResume, editResume,
    createStory, deleteStory } = require('./contollers')
const {isClient} = require('../auth/middlewares')
const passport = require('passport')
const {validateResume, isAuthorOfResume} = require('./middlewares')

// router.post('/api/resume', passport.authenticate('jwt', { session: false }), isEmployee, validateResume, createResume)
router.post('/api/resume', passport.authenticate('jwt', { session: false }), isClient, validateResume, createResume)
router.get('/api/resume', passport.authenticate('jwt', { session: false }), isClient, getMyResumes)
router.get('/api/resumes', passport.authenticate('jwt', { session: false }), isClient, getAllResumes)
router.get('/api/resume/:id', passport.authenticate('jwt', { session: false }), getResume)
router.delete('/api/resume/:id', passport.authenticate('jwt', { session: false }), isClient, isAuthorOfResume, deleteResume) 
router.put('/api/resume', passport.authenticate('jwt', { session: false }), isClient, isAuthorOfResume, validateResume, editResume) 

router.post('/api/story', passport.authenticate('jwt', { session: false }), isClient, createStory)
router.get('/api/resumesBefore24hours', passport.authenticate('jwt', { session: false }), isClient, getAllResumesBefore24hours)
router.delete('/api/story', passport.authenticate('jwt', { session: false }), isClient, deleteStory)

module.exports = router;