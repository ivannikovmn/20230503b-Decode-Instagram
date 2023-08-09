const Follower = require('./Follower')
const {NEW, INVITATION, DECLINED} = require('./utils')

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

module.exports = {
    createFollower,
    deleteFollower
}