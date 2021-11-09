const { use } = require('../routes/router');

const query = require('../controller/db_connection');

class UserModel {

    all = async () => {
        const sql_query = `SELECT * FROM users`;

        return await query(sql_query);
    }
    find= async (id)=>{
        const sql_query=`SELECT * FROM users where id=${id}`;
   
        return await query(sql_query);
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