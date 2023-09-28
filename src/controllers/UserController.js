import Users from '../models/Users.js'

async function getUsers(req,res) {
    const USERS = await Users.find()
    return res.status(200).json(USERS)
}

async function createUsers(req,res) {
    const USER = req.body
    const NEW_USER = await Users.create(USER)
    return res.status(201).json(NEW_USER)
}

async function deleteUser(req,res) {
    const id = req.params.id
    await Users.findByIdAndDelete({_id:id})
    return res.status(200).json({res : 'user deleted'})
}
async function pegarPorId(req,res) {
        const {_id} = req.params
        const user = await Users.findOne({_id});
        res.json(user)
}




export { getUsers, createUsers, deleteUser, pegarPorId }