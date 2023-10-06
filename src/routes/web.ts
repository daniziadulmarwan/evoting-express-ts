import { Router } from "express";
import userController from "../controllers/user.controller";
const Route: Router = Router();

// Route Lists
Route.get("/", userController.index);

export default Route;
