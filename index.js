const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql2');
 
const PORT = process.env.PORT || 3000
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cafeteriadb',
  password: 'valeria04',
});
 
app.use (express.json()); // Esta función parsea el body de la petición y si trae JSON lo agrega a req.body
app.use(cors()) // Habilitar Cors para todas las rutas
 
app.get('/', (req, res) => {
  res.send('El servidor funciona correctamente');
});
 
app.get('/clientes', cors(),(req,res)=>{ // Cors habilitado solo para esta ruta
  // Manejo de la ruta...
  console.log(req.query);
  res.send('Hola Clientes!')
})
 
app.get('/alumnos', (req, res) => {
  connection.query(
    'SELECT * FROM productos WHERE IdProducto > 10',
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
})
 
app.get('/docentes/:control', (req, res) => {
  console.log(req.params);
  res.send('Hello World!')
})
 
app.post('/directivos', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
})
 
app.listen(PORT, () => {
  console.log(`Example app listening on port 3000`)
})
 
 