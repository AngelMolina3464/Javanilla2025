import express from 'express';
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productosRouter = express.Router(); 

productosRouter.get('/productosBase', (req, res) => {
    res.send("Funciona Con productos Base");
})

productosRouter.get('/productosMod', (req, res) => {
    res.send("Funciona con Productos Modificados")
})

export default productosRouter