const Comment = require('./Comment')

const createComment = async (req, res) => {
    // console.log(req.body);
    // res.status(200).send(req.body) 
    try {
        const comment = await Comment.create({
            userId: req.user.id,
            resumeId: req.body.resumeId,
            comment: req.body.comment
        })
        res.status(200).send(comment)        
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteComment = async (req, res) => {
    await Comment.destroy({
        where: {
            id: req.params.id
        }
    })

    res.status(200).end()
}

const getIdpoststoryComments = async (req, res) => {
    const comments = await Comment.findAll({
        where: {
            resumeId: req.params.idpoststory           
        }});
    res.status(200).send(comments)   
}


module.exports = {
    createComment,
    deleteComment,
    getIdpoststoryComments
}