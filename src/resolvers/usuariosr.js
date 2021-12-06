const usuariosService= require ('../services/serviceusuarios')

const UsuariosResolvers ={
    Query:{
          getusuarios: async(parent, args)=>{
             let usuarios = await usuariosService.getusuarios()
             return usuarios
          },
          getusuariosById: async (parent, args) =>{
              let usuarios = await usuariosService.getusuariosById(args._id)
          }

    },
    Mutation:{
        createusuarios: async (parent, args) =>{
           let usuarios = await usuariosService.createusuarios (args)
           return usuarios

        },
        updateusuarios: async (parent, args) =>{
            let usuarios_update = usuariosService.updateusuarios(args._id, args)
            return usuarios_update
        }

    }

}
module.exports ={
    UsuariosResolvers
}