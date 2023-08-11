const Follower = require('./Follower')
// const {NEW, INVITATION, DECLINED} = require('./utils')
const {NEW, INVITATION} = require('./utils')
const User = require('../auth/User');
// const { Op } = require('sequelize');

const createFollower = async (req, res) => {
    // console.log(req.body);
    try {
        const follower = await Follower.create({
            userid: req.body.userid,
            followerUserId: req.body.followerUserId,
            // followedUserId: '0',
            status: NEW
        })
        res.status(200).send(follower)        
    } catch (error) {
        res.status(500).send(error) 
    }
}


const getUsernameFollowers = async (req, res) => {
    try {
        const followers = await Follower.findAll({
            where: {
                userid: req.params.username
            },
            attributes: ['followerUserId'] // Указываем только поле followerUserId
        });
        res.status(200).send(followers);
    } catch (error) {
        res.status(500).send(error);
    }
};


const getUsernameFollowed = async (req, res) => {
    try{
        // console.log('req.params.username ' + req.params.username);
        const followers = await Follower.findAll({
            where: {
                userid: req.params.username                    
            },
            attributes: ['followedUserId'] // Указываем только поле followedUserId
        });
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

const createFollowed = async (req, res) => {
    try{
        // console.log(req.body.applyId);
        // console.log(id); 

        await Follower.update( 
            {
                status: INVITATION,
                followedUserId: req.body.applyId
            },
            {
                where: {
                    id: req.body.applyId
                }
        })
        res.status(200).end()
    } catch(error){
        res.status(500).send(error)
    }     
}

const getSuggestions = async (req, res) => {
    try{
        const userId = req.params.userId; // ID текущего пользователя
        const limit = 1;
        console.log('userId: ' + userId); 

        // Находим ID пользователей, на которых подписан текущий пользователь и его подписчики
        const recommendations = await Follower.findAll({
            where: {
                userid: req.params.userId                    
            },
            attributes: ['followedUserId'], // Указываем только поле followedUserId
            order: [['createdAt', 'DESC']],
            limit,
        });    

        res.status(200).send(recommendations) 

    } catch(error){
        res.status(500).send(error)
    }    
}

module.exports = {
    createFollower,
    getUsernameFollowers,
    getUsernameFollowed,
    deleteFollower,
    createFollowed,
    getSuggestions
}