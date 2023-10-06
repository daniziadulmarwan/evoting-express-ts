import { Request, Response } from "express";

class UserController {
  public async index(req: Request, res: Response) {
    return res.render("index", { title: "Macan Ngamuk" });
  }
}

export default new UserController();
