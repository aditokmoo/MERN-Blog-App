// Multer package
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/images')
    },
    filename: function (req, file, cb) {
        const extname = file.mimetype.split('/')[1];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const uniqueName = file.originalname + '-' + uniqueSuffix + '.' + extname;
        req.uniqueName = uniqueName;
        cb(null, uniqueName)
    }
})

const uploud = multer({ storage: storage })

module.exports = uploud