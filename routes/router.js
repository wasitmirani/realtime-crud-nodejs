var express = require('express');
const url = require('url');
var router = express.Router();
const UserModel = require("../model/User");

// middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function(request, response) {
    const queryObject = url.parse(request.url,true).query;
    const id=queryObject.id;
    console.log('length: ',queryObject.length);
    getAllUsers = async(req, res, next) => {
        let users  = !id  ? ( await UserModel.all()) : (await UserModel.find(1));
      
        if (!users.length) {
            return response.json({message:'Users not found'})
        }
     
        return response.json(users);
    };
    
   return getAllUsers();
 

});



// define the about route
router.get('/about', function(req, res) {
    res.send('About birds');
});

module.exports = router;