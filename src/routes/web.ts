import { Router } from "express";
import userController from "../controllers/user.controller";
import dashboardController from "../controllers/admin/dashboard.controller";
const Route: Router = Router();

// Route Lists
Route.get("/", userController.index);

Route.get("/admin/dashboard", dashboardController.index);

export default Route;
