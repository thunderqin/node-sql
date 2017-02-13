var mysql = require('mysql');
var conn = mysql.createConnection({     host: 'localhost',     user: 'root',     password: 'qgl123654',     database:'guolei',     port: 3306 });
conn.connect();
conn.query('SELECT * from person', function(err, rows, fields) {     if (err) throw err;     console.log(rows[0].name)});
conn.end();
