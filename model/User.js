const { use } = require('../routes/router');

let con = require('../controller/db_connection');





module.exports.getUsers = function() {
    con.connect(function(err) {
        if (err) throw console.log(err);
        con.query("SELECT * FROM gt_users ", function(err, result, fields) {
            if (err) throw console.log(err);
            console.log(result);
            return result;
        });
    });


}