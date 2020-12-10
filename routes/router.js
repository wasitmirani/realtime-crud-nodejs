var express = require('express');
var router = express.Router();
const user = require("../model/User");

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function(req, res) {
    res.send(user.getUsers());
});

// define the about route
router.get('/about', function(req, res) {
    res.send('About birds');
});

module.exports = router;