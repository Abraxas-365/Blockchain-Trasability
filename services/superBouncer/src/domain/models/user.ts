

export class User implements IUser {
    authentication: IAuthentication;
    password: string;
    email: string
    role: number;
    _id?: string;

    constructor(authentication: IAuthentication, password: string, email: string, role: number, _id?: string) {
        this._id = _id;
        this.authentication = authentication;
        this.password = password;
        this.email = email;
        this.role = role;
    }
}





export interface IUser {
    authentication: IAuthentication;
    password: string;
    email: string
    role: number;
    id?: string;
    _id?: string;

}

interface IAuthentication {
    twoFactorAuthentication: ITwoFactorAuthentication
}

interface ITwoFactorAuthentication {
    active: boolean;
    token: string;
}
