import { Request, Response } from "express";
import { IApplication } from "../../../application/initApp";
import { enable_disable2FA } from "./enable_disable2FA";
import { login } from "./login";
import { login2FA } from "./login2FA";

export interface IHandler {
    login(req: Request, res: Response): any
    login2FA(req: Request, res: Response): any
    enable_disable2FA(req: Request, res: Response): any
}

export class Handler implements IHandler {
    protected app: IApplication

    constructor(app: IApplication) {
        this.app = app
    }


    public login = login.bind(this)
    public enable_disable2FA = enable_disable2FA.bind(this)
    public login2FA = login2FA.bind(this)
}
