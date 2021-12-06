const Proyectos = require('../models/proyectos')
const usuariosServicio = require('./serviceusuarios')


createproyectos=async()=> {
    let proyectosInstance =new Proyectos(proyectos)
    proyecto_creado=await proyectosInstance.save()
    await usuariosServicio.updateproyectos(proyectos['id_lider'], proyecto_creado['_id'])
    return proyecto_creado
    
 }
 
 getproyectos = async()=>{
   let proyectos=await Proyectos.find({})
       return proyectos
   }
 
  getproyectosById = async(proyectosId) =>{
    let proyectos= await Proyectos.findById(proyectosId).exec()
    return proyectos
  }
 
  updateproyectos= async(proyectosId, proyectos)=>{
       newproyectos= await Proyectos.findByIdAndUpdate(proyectosId, proyectos,{new:true})
      return newproyectos
  }

  module.exports = {
     createproyectos,
     getproyectos,
     getproyectosById,
     updateproyectos
  }