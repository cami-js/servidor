// Importar de librerías
const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

// Inicializar la librería 

const app = express();


require("dotenv").config();

// Conectar a la base de datos
const connectDB = require('./connection');




// Middlewares
app.use(cors());

app.use(morgan("combined"));

app.use(express.json());

// Configuraciones
const port = process.env.PORT || 4000;

connectDB()

// Recursos estáticos

app.use(express.static(path.join(__dirname,'public')));

// Rutas

app.use(require("./routes/users.routes"))// usuarios
app.use(require("./routes/tasks.routes"))// tareas



// "Escuchar" al servidor
app.listen(port, console.log(`
    El servidor fue iniciado en: http://localhost:${port}
`))


