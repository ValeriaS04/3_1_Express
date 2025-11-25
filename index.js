const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000

app.use(express.json()); //Esta funcion parsea el body de la peticcion y si trae JSON le agrega a php body
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! Prueba con GET')
})

app.post('/', (req, res) => {
  res.send('Hello World! Prueba con POST')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/clientes', cors(), (req, res) => { //cors habilitado solo para esta ruta
  console.log(req.query);
  res.send('Hello World! Clientes');
})

app.get('/alumnos', (req, res) => {
  console.log(req.query);
  res.send('Hello World! Alumnos');
})

app.get('/docentes/:control', (req, res) => {
  console.log(req.params);
  res.send('Hello World! Con num control');
})

app.post('/directivos', (req, res) => {
  console.log(req.body);
  res.send('Hello World! Directivos');
})