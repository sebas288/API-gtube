const express = require('express')
const router = express.Router()
const videoController = require('../controllers/videoControllers')

module.exports = function () {

    router.get('/', () => {
        console.log("hola");
    })
    // agrega nuevos pacientes via post
    router.post('/videos',
        videoController.nuevoVideo
    );
    //obtiene registros de la base de datos
    router.get('/videos',
        videoController.obtenerVideos
    )
    //obtener un video por su id
    router.get('/videos/:id',
        videoController.obtenerVideo
    )
    //actualizar un video con id específico
    router.put('/videos/:id',
        videoController.actualizarVideo
    )
    //Eliminar video por ID
    router.delete('/videos/:id',
        videoController.eliminarVideo
    )

    return router;
}