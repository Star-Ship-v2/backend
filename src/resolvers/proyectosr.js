const proyectosService = require('../services/serviceproyectos')

const proyectosResolvers ={
    Query:{
        getproyectos: async(parent, args)=>{
           let proyectos = await proyectosService.getproyectos()
           return proyectos
        },
        getproyectosById: async (parent, args) =>{
            let proyectos = await proyectosService.getproyectosById(args._id)
            return proyectos
        }

  },
  Mutation:{
      createproyectos: async (parent, args) =>{
         let proyectos = await proyectosService.createproyectos (args)
         return proyectos

      },
      updateproyectos: async (parent, args) =>{
          let proyectos_update = proyectosService.updateproyectos(args._id, args)
          return proyectos_update
      }
  }
}
module.exports = {proyectosResolvers}