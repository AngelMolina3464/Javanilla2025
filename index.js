import express from 'express';
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000; 

// Para Archivos Estaticos con Express
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/model', (req, res) => {
    res.send("Hola Mundo desde Express, pero con Model")
})

app.use((req, res)=> {
    res.status(404).send("Pagina No encontrada")
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})