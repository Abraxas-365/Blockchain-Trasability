import { IUser } from "../models/user";

export interface UserRepository {
    getUser(key: string, value: string): Promise<IUser | null>
    update2FA(user_id: string, enable: boolean, token: string): Promise<any>
}
