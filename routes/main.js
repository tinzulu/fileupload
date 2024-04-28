const express = require('express');
const router = express.Router();
const upload = require('../helpers/upload');
const keycloak = require("../middleware/keyacloak");
const extractToken = require("../middleware/extractToken");
const checkUser = require("../middleware/checkUser");

router.post('/upload', upload.single('file'), [keycloak.protect()],
(req, res) => {
    // Handle the uploaded file
    res.json({ message: 'File uploaded successfully!' });
});

module.exports = router;