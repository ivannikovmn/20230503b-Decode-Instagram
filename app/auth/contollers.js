const sendEmail = require('../utils/sendMail')
const AuthCode = require('./AuthCode')

const User = require('./User');
const Role = require('./Role');

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

    //  console.log(new Date(authCode.valid_till).getTime() > Date.now())
    else {
        let user = await User.findOne({where: {email: req.body.email}})
        const role = await Role.findOne({where: {name: 'client'}})
        if(!user) {
            user = await User.create({
                roleId: role.id,
                email: req.body.email
            })
        }  
        res.status(200).end();        
    }

      
}

module.exports = {
    SendVerificationEmail,
    verifyCode
}