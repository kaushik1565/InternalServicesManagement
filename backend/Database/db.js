var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pms"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM tbl_products", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
