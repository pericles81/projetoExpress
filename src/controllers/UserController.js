import Users from '../models/Users.js'

async function getUsers(req,res) {
    try{const USERS = await Users.find()
    return res.status(200).json(USERS)
}catch(error){

}
}

async function createUsers(req,res) {
try{    const USER = req.body
    const NEW_USER = await Users.create(USER)
    return res.status(201).json(NEW_USER)
}catch(error){

}
}

async function deleteUser(req,res) {
try{    const id = req.params.id
    await Users.findByIdAndDelete({_id:id})
    return res.status(200).json({res : 'user deleted'})
}catch(error){

}
}
async function pegarPorId(req,res) {
        try{const {_id} = req.params
        const user = await Users.findOne({_id});
        res.json(user)
    }catch(error){

    }
}

async function update (req, res) {
try{  const { nome, preco, tipo,  imagem } = req.body;
    let data = {};
    data = { nome, preco, tipo,  imagem  } 
    user = await Users.findByIdAndUpdate({_id}, data, {new: true}) 
    return res.status(200).json(user)
}catch(error){

}
}



export { getUsers, createUsers, deleteUser, pegarPorId, update }