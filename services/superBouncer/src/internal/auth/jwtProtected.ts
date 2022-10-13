import { IClaims, IClaims2FA } from "./generateToken"
const jwt = require('jsonwebtoken');

export function authenticateToken(req: any, res: any, next: any) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, "JWT_SECRET_KEY", (err: any, claim: IClaims) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.body.id = claim.id
        req.body.email = claim.email

        next()
    })
}

export function authenticate2FAToken(req: any, res: any, next: any) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, "2FA_SECRET_KEY", (err: any, claim: IClaims2FA) => {
        console.log(err)

        if (err) return res.sendStatus(403)
        req.body.id = claim.id
        req.body.email = claim.email

        next()
    })
}
