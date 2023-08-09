const validateFollower = (req, res, next) => {
    let errors = {};

    if(!req.body.userid || req.body.userid.length == 0)
    errors.about = "Должно быть заполнено поле Юзер"

    if(!req.body.followerUserId || req.body.followerUserId.length == 0)
    errors.about = "Должно быть заполнено поле Фоллловер"    

    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}



module.exports = {
    validateFollower,
}