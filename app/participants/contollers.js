const Participant = require('./Participant')
const { Op } = require('sequelize');

const getAllParticipants = async (req, res) => {
    const participants = await Participant.findAll()

    res.status(200).send(participants)
}
const getParticipantsByKey = async (req, res) => {
    const participants = await Participant.findAll({
        where: {
            name: {
              [Op.iLike]: `%${req.params.key}%`
            }
        }        
    })

    res.status(200).send(participants)
}

module.exports = {
    getAllParticipants,
    getParticipantsByKey
}