const multer = require('multer');
const path = require('path');

// Set up Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, 'template.xlsx');
    },
});

// Create the upload middleware
const upload = multer({ storage: storage });

// Handle the file upload request
const uploadTemplate = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    console.log('Uploaded file:', req.file); // Log the file details

    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
};

module.exports = {
    upload,
    uploadTemplate,
};
