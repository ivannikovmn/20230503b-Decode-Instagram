const Resume = require('./models/Resume')
const { Op } = require('sequelize');

const createResume = async (req, res) => {
    // console.log(req.body, req.user);
    console.log(req.body);

    const resume = await Resume.create({     
        post: req.body.post,      
        // story: req.body.story,  
        story: "",  
        about: req.body.about,
        participants: req.body.participants,
        cityId: req.body.cityId,
        userId: req.user.id      
    })      

    res.status(200).send(resume);
}

const createStory = async (req, res) => {
    // console.log(req.body, req.user);
    console.log(req.body); 

    const resume = await Resume.create({
        post: "",      
        story: req.body.story,  
        about: req.body.about,
        participants: req.body.participants,
        cityId: req.body.cityId,
        userId: req.user.id      
    })      

    res.status(200).send(resume);
}

const getMyResumes = async (req, res) => {
    const resumes = await Resume.findAll({
        where: {
            userId: req.user.id,
            post: {
                [Op.not]: "" // Поле "post" не может быть пустым
            }            
        }});
    res.status(200).send(resumes)
}

const getUsernameResumes = async (req, res) => {
    // console.log('req.params.username ' + req.params.username);
    const resumes = await Resume.findAll({
        where: {
            userId: req.params.username           
        }});
    res.status(200).send(resumes)   
}

const getAllResumes = async (req, res) => {
    const resumes = await Resume.findAll({
        where: {
            post: {
                [Op.not]: "" // Поле "post" не может быть пустым
            }
        }        
    });
    res.status(200).send(resumes)
}

    // const getAllResumesBefore24hours = async (req, res) => {

    //     const resumes = await Resume.findAll({where: {createdAt: "2023-07-21T12:34:43.362Z"}});
    //     res.status(200).send(resumes)
    // }
    const getAllResumesBefore24hours = async (req, res) => {
        // Получаем текущую дату и время
        const currentDate = new Date();
        // Вычитаем 24 часа из текущей даты и времени
        const twentyFourHoursAgo = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
        // Используем операторы сравнения для фильтрации данных по дате создания
        const resumes = await Resume.findAll({
            where: {
                createdAt: {
                    [Op.gte]: twentyFourHoursAgo, // Записи, созданные после twentyFourHoursAgo
                    [Op.lt]: currentDate, // Записи, созданные до текущей даты
                },
                story: {
                    [Op.not]: "" // Поле "post" не может быть пустым
                }
            }
        });
        res.status(200).send(resumes);
    };


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

const deleteStory = async (req, res) => {
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
    getUsernameResumes,
    getAllResumesBefore24hours,
    getResume,
    deleteResume,
    editResume,

    createStory,
    deleteStory
}