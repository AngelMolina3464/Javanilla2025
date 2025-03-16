import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Controllers
import mascotasController from "../controllers/mascotasController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mascotasRouter = express.Router();

mascotasRouter.get("/mascotas", (req, res) => {
  console.log("En la Ruta de mascotas ");
  res.send("Funciona en Mascotas 🐶🐈");
});

mascotasRouter.get("/", mascotasController.getAll);
mascotasRouter.post("/", mascotasController.create);
mascotasRouter.get("/:id", mascotasController.getOne);
mascotasRouter.put("/:id", mascotasController.update);
mascotasRouter.delete("/:id", mascotasController.delete);

export default mascotasRouter;
