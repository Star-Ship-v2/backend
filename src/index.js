const express = require('express')
const mongoose = require ('mongoose')
const {ApolloServer}= require ("apollo-server-express")
const {resolvers}=require('./resolvers')
const{types}=require('./types')

const app = express()
const server = new ApolloServer({
  typeDefs:types,
  resolvers:resolvers

})

const url='mongodb+srv://admonackkp:a1c2k3k4p5@cluster0.p9axl.mongodb.net/proyectosInvestigacion?retryWrites=true&w=majority'

mongoose.connect(url, async()=> {
    console.log('conexion a la base de datos exitosa');
    app.listen(5000, async()=>{
        await server.start()
        server.applyMiddleware({app})

        console.log('servidor inicializado en puerto 5000');
    })
 })