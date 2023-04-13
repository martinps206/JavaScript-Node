const mysql = require('mysql2');

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "ConexionJSMysql"
});


conection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    conection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});


conection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    conection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

conection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
})

conection.end()

/* conection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    conection.query("Colocar una sentencia SQL", function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
}); */