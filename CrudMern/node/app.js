import express from 'express'
import cors from 'cors'
// importar la conexion a la BD
import db from './database/db.js'
// importar nuestro enrutadores
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB');
}catch (error) {
    console.log(`El error de conxion es: ${error}`);
}

app.get('/', (req, res) => {
    res.send('Hola Martin')
})

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})