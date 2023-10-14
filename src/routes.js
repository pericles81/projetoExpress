import { Router } from "express";
import { getUsers, createUsers, deleteUser,pegarPorId, update } from "./controllers/UserController.js";

 const ROUTES = Router()


ROUTES.get('/', getUsers)
ROUTES.get('/:_id', pegarPorId)
ROUTES.put('/:_id', update)
ROUTES.post('/',createUsers)
ROUTES.delete('/:id',deleteUser)

export default ROUTES