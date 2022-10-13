import { Request, Response } from "express";
import { Handler } from "./initHandler";

export async function login(this: Handler, req: Request, res: Response): Promise<any> {
    let email: string = req.body['email'];
    let password: string = req.body['password'];
    let token = await this.app.login(email, password)
    res.status(200).json({ "token": token })
}
