import { generate2FA, generateAccessToken } from "../internal/auth/generateToken";
import { Application } from "./initApp";

export async function login(this: Application, email: string, password: string): Promise<string> {

    let user = await this.repo.getUser("email", email)

    //if user not exost or the pass not conside
    if (user == null || user.password != password) {
        throw new Error("user not found")
    }
    //if 2FA is enable
    if (user.authentication.twoFactorAuthentication.active == true) {
        let token = generate2FA(user._id!, user.email)
        return token
    }

    //else 2FA disabled
    let token = generateAccessToken(user.email, user._id!, user.role)


    return token
}
