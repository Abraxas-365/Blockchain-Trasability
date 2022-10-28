
import express, { Request, Response, Router } from 'express';
import { authenticate2FAToken, authenticateToken } from '../../internal/auth/jwtProtected';
import { IHandler } from './handlers/initHandler';


export function Routes(app: express.Application, handler: IHandler): any {

    const router = express.Router();
    router.post("/login", handler.login)
    router.post("/login2fa", authenticate2FAToken, handler.login2FA)
    router.post("/activate2fa", authenticateToken, handler.enable_disable2FA)

    //declaring principal path
    app.use("/api/super-bouncer", router);
}
// Home page route.
