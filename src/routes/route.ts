import { Router } from "express";
import Web from "./web";

class Route {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.use(Web);
  }
}

const route: Router = new Route().router;
export default route;
