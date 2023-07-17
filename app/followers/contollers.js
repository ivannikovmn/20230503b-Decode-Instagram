const Follower = require('./Follower')
const { Op } = require('sequelize');

const getAllFollowers = async (req, res) => {
    const followers = await Follower.findAll()

    res.status(200).send(followers)
}
const getFollowersByKey = async (req, res) => {
    const followers = await Follower.findAll({
        where: {
            name: {
              [Op.iLike]: `%${req.params.key}%`
            }
        }        
    })

    res.status(200).send(followers)
}

module.exports = {
    getAllFollowers,
    getFollowersByKey
}