const {proyectosResolvers} = require('./proyectosr')
const {usuariosResolvers}=require ('./usuariosr')

const resolvers= [proyectosResolvers, usuariosResolvers]

module.exports={resolvers}