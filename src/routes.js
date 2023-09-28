import { Router } from "express";
import { getUsers, createUsers, deleteUser,pegarPorId } from "./controllers/UserController.js";

 const ROUTES = Router()


ROUTES.get('/', getUsers)
ROUTES.get('/:_id', pegarPorId)
ROUTES.put('',)
ROUTES.post('/',createUsers)
ROUTES.delete('/:id',deleteUser)

export default ROUTES