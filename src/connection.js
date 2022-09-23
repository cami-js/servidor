const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        mongoose.connect( process.env.MONGODB_URI );
        console.log("Se logró la conexión a la base de datos :)")
    } catch (error) {
        console.log(`No se pudo conectar a la base de datos: ${error}`)
    }
}

module.exports = connectDB