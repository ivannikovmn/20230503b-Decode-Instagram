const Follower = require('./Follower')
// const {NEW, INVITATION, DECLINED} = require('./utils')
const {NEW} = require('./utils')

const createFollower = async (req, res) => {
    // console.log(req.body);
    try {
        const follower = await Follower.create({
            userid: req.body.userid,
            followerUserId: req.body.followerUserId,
            status: NEW
        })
        res.status(200).send(follower)        
    } catch (error) {
        res.status(500).send(error) 
    }
}

const getUsernameFollowers = async (req, res) => {
    try{
        // console.log('req.params.username ' + req.params.username);
        const followers = await Follower.findAll({
            where: {
                userid: req.params.username           
            }});
        res.status(200).send(followers)   
    } catch(error){
        res.status(500).send(error)
    }    
}

const deleteFollower = async (req, res) => {
    try{
        await Follower.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).end()
    } catch(error){
        res.status(500).send(error)
    }    
}

const getUsernameFollowed = async (req, res) => {
    try{
        // console.log('req.params.username ' + req.params.username);
        const followers = await Follower.findAll({
            where: {
                followerUserId: req.params.username                    
            }});
        res.status(200).send(followers)   
    } catch(error){
        res.status(500).send(error)
    }    
}

module.exports = {
    createFollower,
    getUsernameFollowers,
    deleteFollower,
    getUsernameFollowed
}