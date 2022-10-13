import { Application } from "./initApp";

const twofactor = require("node-2fa");


type ISecret2FA = {
    secret: string;
    uri: string;
    qr: string
}
export async function enable_disable2FA(this: Application, user_id: string, email: string, enable: boolean): Promise<string | any> {

    let token = ""
    const newSecret: ISecret2FA = twofactor.generateSecret({ name: "MAGICTRUST", account: email });
    if (enable === true) {
        token = newSecret.secret
    }

    await this.repo.update2FA(user_id, enable, token)
    if (enable) {
        return newSecret.qr
    }
}
