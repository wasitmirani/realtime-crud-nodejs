var express = require('express');
var router = express.Router();
const UserModel = require("../model/User");

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function(req, res) {
    getAllUsers = async(req, res, next) => {
        let userList = await UserModel.find();
        if (!userList.length) {
            throw new HttpException(404, 'Users not found');
        }
        console.log("hello", userList)
        res.send(userList);
    };

    return res.send(getAllUsers());

});


// define the about route
router.get('/about', function(req, res) {
    res.send('About birds');
});

module.exports = router;