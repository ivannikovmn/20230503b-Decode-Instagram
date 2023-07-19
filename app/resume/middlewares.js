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

module.exports = {
    validateResume
}