import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    }
})
export default mongoose.model('User', userSchema)