const express = require('express')
const router = express.Router();
const {getAllParticipants, getParticipantsByKey} = require('./contollers')

router.get('/api/participants', getAllParticipants)
router.get('/api/participants/:key', getParticipantsByKey)

module.exports = router;