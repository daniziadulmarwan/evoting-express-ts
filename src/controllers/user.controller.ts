import { Request, Response } from "express";

class UserController {
  public async index(req: Request, res: Response) {
    return res.render("layouts/admin", { title: "Macan Ngamuk" });
  }
}

export default new UserController();
