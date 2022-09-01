import { IIotaWallet } from "./IotaWallet"
import { ILacchainWallet } from "./LacchainWallet";

export class User implements IUser {
    public tecnologies: string
    public company: ICompany
    public _id?: any


    constructor(tecnologies: string, company: ICompany, id?: any) {
        this.tecnologies = tecnologies;
        this._id = id
        this.company = company;
    }
}


export interface IUser {
    tecnologies: string
    _id?: any
    company: ICompany
}

interface ICompany {
    _id: string
    name: string
    tecnologies: string
    iota: IIotaWallet
    lacchain: ILacchainWallet
}
