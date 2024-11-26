const express = require('express');
const { upload, uploadTemplate } = require('../controller/uploadController'); // Import the upload controller
const router = express.Router();
const path = require('path');

// Define the upload route
router.post('/upload', upload.single('template'), uploadTemplate); // 'template' is the field name in your form
router.get('/template', (req, res) => {
     const templatePath = path.join(__dirname, '../uploads/template.xlsx'); // Adjust the filename as necessary
     res.sendFile(templatePath, err => {
          if (err) {
               res.status(err.status).end();
          }
     });
});
module.exports = router;
