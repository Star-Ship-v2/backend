const {gql}= require("apollo-server-express")

const usuariosType= gql `
    type usuarios{
      _id: ID!
      nombre: String
      apellidos: String
      identificacion: Int
      estado:String
      perfil:String
      email: String
      contraseña:Strting
      proyectos:[Proyectos]
    }
    type proyectos{
      _id:ID!
      mombre:String
      objetivo_general: String
      objetivos_especificos:String
      presupuesto: Long
      fecha_inicio:Date 
      fecha_finalizacion:Date
      estado:String
      fase:String
      id_proyecto:Int
      id_lider:Int



    }   
      type Query{
        getusuarios:[Usuarios]
        getusuariosById(_id:String): Usuarios
      }
      type Mutation{
          createusuarios(
            nombre: String
            apellidos: String
            identificacion: Int
            estado:String
            perfil:String
            email: String
            contraseña:String
          ): Usuarios

          updateusuarios(
            _id: ID!
            nombre: String
            apellidos: String
            identificacion: Int
            estado:String
            perfil:String
            email: String
            contraseña:Strting
            ): Usuarios
          )
      }

` ;
module.exports={usuariosType}