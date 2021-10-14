const express = require('express')
const routes = require('./routes/app.js')
const mongoose  = require('mongoose')
const bodyParser = require('body-parser')
const { appConfig } = require('./config');

const app = express()
const { port } = appConfig
const uri = process.env.MONGODB_URI

//Conexión a la base de datos
mongoose.connect(uri)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err))


//Habilitar el body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Habilitar la lectura de contenido estatico
app.use(('/public'),express.static(`${__dirname}/storage`))

//Habilitar routing
app.use('/', routes())//middleware de express, cuando el usuario entre a / vamos a ejecutar la funcion de routes

//Levantar el servidor
app.listen(port, ()=> {
    console.log("corriendo en el puerto: " + port);
})