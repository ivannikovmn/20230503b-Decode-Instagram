const Like = require('./Like')
const {LIKE} = require('./utils')

const createLike = async (req, res) => {
    // console.log(req.body);
    try {
        const like = await Like.create({
            userId: req.user.id,
            resumeId: req.body.resumeId,
            status: LIKE
        })
        res.status(200).send(like)        
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteLike = async (req, res) => {
    await Like.destroy({
        where: {
            id: req.params.id
        }
    })

    res.status(200).end()
}

module.exports = {
    createLike,
    deleteLike
}