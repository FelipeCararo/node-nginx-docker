const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.get('/', (req,res) => {
  var con = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'pfa'
  });

  con.connect(function(err) {
    if (err) throw err;

    con.query("SELECT * FROM course", function (err, result, fields) {
      if (err) throw err;

      let items = [];
      result.forEach(element => {
        items.push(element.name);
      });
      res.send(`${items.join(', ')}`);
    });

  });

});

app.listen(port, ()=> {
  console.log(`Rodando na porta: ${port}`);
})
