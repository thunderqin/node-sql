var mysql = require('mysql');
var conn = mysql.createConnection({     host: 'localhost',     user: 'root',     password: 'qgl123654',     database:'guolei',     port: 3306 });
conn.connect();
conn.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {     if (err) throw err;     console.log('The solution i::s: ', rows[0].solution); });
conn.end();
