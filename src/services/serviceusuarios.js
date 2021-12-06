const Usuarios= require('../models/usuarios')

//metodos del CRUD
createusuarios=async()=> {
   let usuariosInstance =new Usuarios(usuarios)
   usuarios=await usuariosInstance.save()
   return usuarios
}

getusuarios = async()=>{
  let usuarios=await Usuarios.find({})
      return usuarios
  }

 getusuariosById = async(usuariosId) =>{
   let usuarios= await Usuarios.findById(usuariosId).populate("proyectos")
   return usuarios
 }

 updateusuarios= async(usuariosId, usuarios)=>{
     let new_usuarios=Usuarios.findByIdAndUpdate(usuariosId, usuarios,{new:true})
     return new_usuarios
 }
 updateproyectos= async(usuariosId, proyectosId)=>{
     let usuarios=await Usuarios.findByIdAndUpdate(usuariosId, {
        $push:{
            proyectos:proyectosId
        }
     })
     return usuarios
 }
 module.exports = {
    createusuarios,
    getusuarios,
    getusuariosById,
    updateusuarios,
    updateproyectos   

 }