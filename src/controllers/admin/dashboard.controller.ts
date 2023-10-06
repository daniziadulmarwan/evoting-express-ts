import { Request, Response } from "express";

class DashboardController {
  public async index(req: Request, res: Response) {
    return res.render("layouts/admin", { title: "Macan Ngamuk" });
  }
}

export default new DashboardController();
