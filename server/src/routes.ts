import { Router } from "express";
import { CalcadosController } from "./controllers/CalcadosController";

const routes = Router();
const calcadosController = new CalcadosController();

routes.post("/calcados", calcadosController.create);      // POST para Criar [cite: 109]
routes.get("/calcados", calcadosController.read);        // GET para Ler [cite: 110]
routes.patch("/calcados/:id", calcadosController.update); // PATCH para Atualizar [cite: 111]
routes.delete("/calcados/:id", calcadosController.delete); // DELETE para Remover [cite: 112]
routes.get("/calcados/tamanho/:tamanho", calcadosController.findBySize);
export default routes;