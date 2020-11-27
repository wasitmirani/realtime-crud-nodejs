var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "genuinetrade"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

con.connect(function(err) {
  if (err) throw  console.log(err);
  con.query("SELECT * FROM gt_users", function (err, result, fields) {
    if (err) throw console.log(err);
    console.log(result);
  });
});