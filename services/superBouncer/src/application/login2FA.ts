import { generate2FA, generateAccessToken } from "../internal/auth/generateToken";
import { Application } from "./initApp";
const twofactor = require("node-2fa");

type TwoFactorResponse = {
    delta: number
}
export async function login2FA(this: Application, user_id: string, auth_number: string): Promise<string> {

    let user = await this.repo.getUser("_id", user_id);

    //if user not exost
    if (user == null) {
        throw new Error("user not found")
    }

    let correct: TwoFactorResponse = twofactor.verifyToken(user.authentication.twoFactorAuthentication.token, auth_number);

    if (correct.delta != 0) {
        throw new Error("bad token")
    }


    let token = generateAccessToken(user.email, user._id!, user.role)


    return token
}
