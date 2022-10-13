import { Request, Response } from "express";
import { Handler } from "./initHandler";

export async function enable_disable2FA(this: Handler, req: Request, res: Response): Promise<any> {
    let email: string = req.body['email'];
    let user_id: string = req.body['id']
    let active: boolean = req.body['active']

    console.log("USER_IDLUISFER", user_id)
    let uri = await this.app.enable_disable2FA(user_id, email, active)
    if (active == true) {
        res.status(200).json({ "uri": uri })
    }
    res.status(200)
}
