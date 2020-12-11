const { use } = require('../routes/router');

const query = require('../controller/db_connection');

class UserModel {

    find = async() => {
        let sql = `SELECT * FROM users`;

        // if (!Object.keys(params).length) {
        //     return await query(sql);
        // }

        // const { columnSet, values } = multipleColumnSet(params)
        // sql += ` WHERE ${columnSet}`;

        return await query(sql);
    }

}
module.exports = new UserModel;


// = function() {

//     con.connect(function(err) {
//         if (err) throw console.log(err);
//         con.query("SELECT * FROM users ", function(err, result, fields) {
//             if (err) throw console.log(err);
//             console.log(result);

//             return result;
//         });

//     });


// }