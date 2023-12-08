import mongoose from "mongoose";

const LojaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cnpj : {
        type : String,
        required : true
    },    
    fornecedor:{
        type: mongoose.ObjectId,
        ref: 'Forcenedor'
    }

    
})
export default mongoose.model('Loja', LojaSchema)