import express from 'express';
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);;

const mainRouter = express.Router(); 
const urlpath = path.join(__dirname, 'public', 'tech.html').replace("router\\", "")
console.log(urlpath)
mainRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

})
mainRouter.get('/tech', (req, res) => {
    const urlpath = path.join(__dirname, 'public' , 'tech.html').replace("router\\", "")
    res.sendFile(urlpath)
})
mainRouter.get('/abe', (req, res) => {
    const urlpath = path.join(__dirname, 'public' , 'abe.html').replace("router\\", "")
    res.sendFile(urlpath);
})

export default mainRouter