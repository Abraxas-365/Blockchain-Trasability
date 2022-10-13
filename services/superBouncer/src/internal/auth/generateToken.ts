const jwt = require('jsonwebtoken');


export type IClaims = {
    email: string;
    id: string;
    role: number;
}
export type IClaims2FA = {
    id: string;
    email: string;
}

export function generateAccessToken(email: string, user_id: string, role: number) {
    let calims: IClaims = {
        email: email,
        id: user_id,
        role: role
    }
    return jwt.sign(calims, "JWT_SECRET_KEY", {});
}

export function generate2FA(user_id: string, email: string) {
    let calims: IClaims2FA = {
        id: user_id,
        email: email
    }
    return jwt.sign(calims, "2FA_SECRET_KEY", {});
}
