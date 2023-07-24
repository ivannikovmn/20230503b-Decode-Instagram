const sendEmail = require('../utils/sendMail')
const AuthCode = require('./AuthCode')
const jwt = require('jsonwebtoken');

const User = require('./User');
const Role = require('./Role');

const {jwtOptions} = require('./passport')

const SendVerificationEmail = (req, res) => {
    // console.log(req.body);

    const code = "INSTAGRAM" + Date.now();

    AuthCode.create({
        email: req.body.email,
        code: code,
        valid_till: Date.now() + 120000
    })
    sendEmail(req.body.email, "Код авторизации instagram.com", code)

    res.status(200).end();
}

const verifyCode = async (req, res) => {
    console.log(req.body);

    const authCode = await AuthCode.findOne({
        where: {email: req.body.email},
        order: [['valid_till', 'DESC']],
    })

    if(!authCode) {
        res.status(401).send({error: "code is invalid"});
    } else if(new Date(authCode.valid_till).getTime() < Date.now()){
        res.status(401).send({error: "code is invalid"});
    } else if(authCode.code !== req.body.code){
        res.status(401).send({error: "code is invalid"});
    }
    else {


        let user = await User.findOne({where: {email: req.body.email}})
        const role = await Role.findOne({where: {name: 'client'}})
        if(!user) {
            user = await User.create({
                roleId: role.id,
                email: req.body.email
            })
        }


        // const token = jwt.sign(user, jwtOptions.secretOrKey);
        const token = jwt.sign({ 
            id: user.id, 
            email: user.email,  
            full_name: user.full_name,
            phone: user.phone,
            role: {
                id: role.id,
                name: role.name
            },

        }, jwtOptions.secretOrKey, {
            expiresIn: 24 * 60 * 60 * 365
        });
        // res.status(200).send(user);
        res.status(200).send({token});
    }

    // console.log(new Date(authCode.valid_till).getTime() > Date.now())

   
}

const editUser = async (req, res) => {
    try {
        // Получаем данные для обновления из req.body
        const updatedData = {
            email: req.body.email,
            full_name: req.body.full_name,
            phone: req.body.phone,
        };

        // Находим пользователя по email из запроса
        let user = await User.findOne({ where: { email: 'local_host@mail.ru' } });

        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден.' });
        }

        // Обновляем данные пользователя с помощью метода update
        await User.update(updatedData, {
            where: {
                id: user.id
            }
        });

        return res.status(200).json({ message: 'Данные пользователя успешно обновлены.' });
    } catch (error) {
        console.error('Ошибка при обновлении данных пользователя:', error);
        return res.status(500).json({ message: 'Ошибка сервера.' });
    }
};


module.exports = {
    SendVerificationEmail,
    verifyCode,
    editUser
}