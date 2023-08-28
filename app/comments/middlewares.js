const Comment = require('./Comment')
// const Resume = require('../resume/models/Resume')

const isAuthorOfComment = async (req, res, next) => {
    const id = req.params.id

    const comment = await Comment.findByPk(id)

    if(!comment) res.status(400).send({message: "Comment with that id is not exist"})
    else {
        const comments = await Comment.findAll({
            where: {
                userId: req.user.id
            }
        })
    
        const ids = comments.map(item => item.id)
        // console.log(ids, id, ids.includes(id*1));
        if(ids.includes(id*1)){
            next()
        } else{
            res.status(403).send({message: "Access Forbiden"})
        }
    }
}

module.exports = {
    isAuthorOfComment
}