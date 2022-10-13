import { UserRepository } from "../domain/ports/userRepo"
import { enable_disable2FA } from "./activate2FA"
import { login } from "./login"
import { login2FA } from "./login2FA"

export interface IApplication {
    login(email: string, password: string): Promise<string>
    login2FA(user_id: string, auth_numbers: string): Promise<string>
    enable_disable2FA(user_id: string, email: string, enable: boolean): Promise<string | any>
}

export class Application implements IApplication {
    protected repo: UserRepository

    constructor(repo: UserRepository) {
        this.repo = repo
    }

    public login = login.bind(this)
    public enable_disable2FA = enable_disable2FA.bind(this)
    public login2FA = login2FA.bind(this)

}
