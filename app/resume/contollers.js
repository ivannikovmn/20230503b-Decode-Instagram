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

const getMyResumes = async (req, res) => {
    const resumes = await Resume.findAll({where: {userId: req.user.id}});
    res.status(200).send(resumes)
}

const getAllResumes = async (req, res) => {
    const resumes = await Resume.findAll();
    res.status(200).send(resumes)
}

const getResume = async (req, res) => {
    const resume = await Resume.findByPk(req.params.id);
    res.status(200).send(resume)
}

const deleteResume = async (req, res) => {
    const data = await Resume.destroy({
        where: {
            id: req.params.id,
        }
    })
    console.log(data);
    res.status(200).end()
}

const editResume = async (req, res) => {
    await Resume.update({
        post: req.body.post,      
        story: req.body.story,  
        about: req.body.about,
        participants: req.body.participants,
        cityId: req.body.cityId,
        userId: req.user.id      
    },
    {
        where: {
        id: req.body.id
        }
    })
    
    res.status(200).end()
}

module.exports = {
    createResume,
    getMyResumes,
    getAllResumes,
    getResume,
    deleteResume,
    editResume
}