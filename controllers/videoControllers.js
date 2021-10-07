const Video = require('../models/Video.js')

//crear nuevo video
exports.nuevoVideo = async (req, res, next) => {
    //crear objeto de paciente con datos de req.body
    const video = new Video(req.body);

    try {
        await video.save();
        res.json({ mensaje: 'El Video se agregó correctamente' })
    } catch (error) {
        console.log(error);
        next();
    }
}
//Obtener todos los videos
exports.obtenerVideos = async (req, res, next) => {
    try {
        const videos = await Video.find({})
        res.json(videos)
    } catch (error) {
        console.log(error);
        next();
    }
}

//Obtener un video por id
exports.obtenerVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        res.json(video);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Actualizar un video por su id
exports.actualizarVideo = async (req, res, next) => {
    try {
        const video = await Video.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(video);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar video por id
exports.eliminarVideo = async (req, res, next) => {
    try {
        await Video.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El video fue eliminado|'}) 
    } catch (error) {
        console.log(error);
        next();
    }
}