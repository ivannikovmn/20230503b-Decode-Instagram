const Like = require('./Like')
const Resume = require('../resume/models/Resume')

const isAuthorOfLike = async (req, res, next) => {
    const id = req.params.id

    const like = await Like.findByPk(id)

    if(!like) res.status(400).send({message: "Like with that id is not exist"})
    else {
        const likes = await Like.findAll({
            where: {
                userId: req.user.id
            }
        })
    
        const ids = likes.map(item => item.id)
        // console.log(ids, id, ids.includes(id*1));
        if(ids.includes(id*1)){
            next()
        } else{
            res.status(403).send({message: "Access Forbiden"})
        }
    }
}

module.exports = {
    isAuthorOfLike
}