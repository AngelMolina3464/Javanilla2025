import express from 'express';
import morgan from 'morgan';
import path from "path"
import { fileURLToPath } from 'url';
// Routers 
import productosRouter from './router/productsRouters.js';
import mainRouter from "./router/mainRouters.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4800; 

// Para Archivos Estaticos con Express
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para rutas en modo Dev
app.use(morgan('dev'));

// Uso de Routers
app.use(mainRouter)
app.use(productosRouter)

app.use((req, res)=> {
    res.status(404).send("Pagina No encontrada")
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})