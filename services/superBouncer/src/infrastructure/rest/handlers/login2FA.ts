import { Request, Response } from "express";
import { Handler } from "./initHandler";

export async function login2FA(this: Handler, req: Request, res: Response): Promise<any> {
    let user_id: string = req.body['id'];
    let auth_number = req.body['auth_number'];
    try {
        let token = await this.app.login2FA(user_id, auth_number)
        res.status(200).json({ "token": token })
    } catch (e: any) {
        res.status(500).json({ "error": e })
    }


}
