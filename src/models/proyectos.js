const mongoose = require('mongoose')
const Schema = mongoose.Schema
const usuarios= require('./usuarios')

const proyectosSchema= new Schema({
       
   
   id_proyecto:{
        type:String,
        required: true
    },
    nombre:{
        type:String,
        required: true
    },

     objetivo_general:{
        type:String,
        
    },
     objetivos_especificos:{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        type:String,
        
    },
     presupuesto :{
        type:String,
       
    },
     fecha_inicio:{
        type:Date,
        
    },
    fecha_finalizacion:{
        type:Date,
        
    },
     estado:{
        type:String,      
    },
    fase:{
        type:String,      
    },

    id_lider:{
        type:String,
        ref:'usuarios'
    }

                     
   
})
module.exports=mongoose.model("proyectos", proyectosSchema)