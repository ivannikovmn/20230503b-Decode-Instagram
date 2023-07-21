const Resume = require('./models/Resume')
const validateResume = (req, res, next) => {
    let errors = {};

    if(!req.body.post && 
        req.body.post.length == 0 &&
       !req.body.story && 
        req.body.story.length == 0)
    errors.about = "Должно быть заполнено поле Пост или История"

    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

const isAuthorOfResume = async (req, res, next) => {
    const id = req.params.id || req.body.id

    const resume = await Resume.findByPk(id)
    if(!resume) res.status(400).send({message: "Resume with that id is not exist"})
    else if(resume && req.user.id === resume.userId) next();
    else res.status(403).send({message: "Access Forbiden"})    
}

module.exports = {
    validateResume,
    isAuthorOfResume
}