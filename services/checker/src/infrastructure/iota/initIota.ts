import BlockchainRepository from "../../domain/ports/BlockchainRepo";
import { getBlockInfo } from "./getBlockInfo";

export class IotaRepo implements BlockchainRepository {
    protected uri: string

    constructor(uri: string) {
        this.uri = uri;
    }


    public getBlockInfo = getBlockInfo.bind(this)
    // public getUserById = getUserById.bind(this);


}
