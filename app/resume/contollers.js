const Resume = require('./models/Resume')

const createResume = async (req, res) => {
    // console.log(req.body, req.user);
    console.log(req.body);

    const resume = await Resume.create({
        post: req.body.post,      
        story: req.body.story,  
        about: req.body.about,
        participants: req.body.participants,
        cityId: req.body.cityId,
        userId: req.user.id      
    })      

    res.status(200).send(resume);
}

module.exports = {
    createResume
}