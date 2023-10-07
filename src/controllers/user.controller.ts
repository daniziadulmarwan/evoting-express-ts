import { Request, Response } from "express";
import prisma from "../libs/prisma";

class UserController {
  public async index(req: Request, res: Response) {
    const response = await prisma.user.findMany();
    return res.render("layouts/admin", { title: "Macan Ngamuk" });
  }
}

export default new UserController();
