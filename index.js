const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.get('/add_list', (req,res) => {
  var con = mysql.createConnection({
    host: 'some-mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
  });

  con.connect(function(err) {
    if (err) throw err;

    con.query("INSERT INTO course(name) VALUES('Docker')");
    con.query("INSERT INTO course(name) VALUES('Padrões e técnicas avançadas com Git e Github')");
    con.query("INSERT INTO course(name) VALUES('Integração contínua')");
    con.query("INSERT INTO course(name) VALUES('Kubernetes')"); 
    con.query("INSERT INTO course(name) VALUES('Service Mesh com Istio (em breve)')"); 

    res.send('Nomes inseridos com sucesso!');
  });

});

app.get('/', (req,res) => {
  var con = mysql.createConnection({
    host: 'some-mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
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
