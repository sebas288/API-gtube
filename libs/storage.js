const multer = require('multer')

const storage = multer.diskStorage({
    destination: 'storage/',
    filename: function (req, file, cb) {
        cb("", Date.now() + file.originalname) // + mimeTypes.extension(file.mimetype)
    }
})

const upload = multer({ storage })

module.exports = upload