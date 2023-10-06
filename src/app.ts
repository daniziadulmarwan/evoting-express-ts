import express, { Application, Request, Response } from "express";
import path from "path";
import morgan from "morgan";
import route from "./routes/route";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  public plugins(): void {
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "ejs");

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static(path.join(__dirname, "../public")));
    this.app.use(morgan("tiny"));
  }

  public routes(): void {
    this.app.use(route);
  }
}

const port: string = process.env.PORT || "8000";
const app: Application = new App().app;
app.listen(port, () => console.log("Server running"));
