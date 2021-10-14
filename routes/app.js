const express = require('express')
const router = express.Router()
const videoController = require('../controllers/videoControllers')
const upload = require('../libs/storage')

module.exports = function () {
    

    router.get('/', (req, res, next) => {
        res.sendFile(__dirname + "/views/index.html"); 
    })

    // agrega nuevos pacientes via post
    router.post('/videos', upload.single('videoURL'),
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