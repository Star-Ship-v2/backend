const mongoose = require('mongoose')
const Schema = mongoose.Schema
const proyectos= require('./proyectos')


const usuariosSchema= new Schema({ 
    nombre:{
        type:String,
        required: true
    },
    apellidos:{
        type:String,
        required: true
    },
     identificacion:{
        type:String,
        required: true
    },
     email:{
        type:String,
        required: true
    },
     estado :{
        type:String,
        required: false
    },
     perfil:{
        type:String,
        required: false
    },
     contraseña:{
        type:String,
        required: false
    },
                     
    proyectos: [{
        type: Schema.Types.ObjectId,
        ref: "proyectos"
    }]
})
module.exports=mongoose.model("usuarios", usuariosSchema)