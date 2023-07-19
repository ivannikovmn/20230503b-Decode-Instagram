
const Role = require('./Role')

const isClient = async (req, res, next) => {
    if(req.user ) {
        const role = await Role.findByPk(req.user.roleId)

        if(role.name === "client" ) next()
        else res.status(403).send({message: "Access deinided"})
    }
    else res.status(403).send ({message: "Unauthorized"})
}

const isManager = async (req, res, next) => {
    if(req.user ) {
        const role = await Role.findByPk(req.user.roleId)

        if(role.name === "manager" ) next()
        else res.status(403).send({message: "Access deinided"})
    }
    else res.status(403).send ({message: "Unauthorized"})
}

module.exports = {
    isClient,
    isManager
}