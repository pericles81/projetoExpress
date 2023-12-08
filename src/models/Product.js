import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
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
    },
    loja:{
        type: mongoose.ObjectId,
        ref: 'Loja'
    }
})
export default mongoose.model('Product', productSchema)