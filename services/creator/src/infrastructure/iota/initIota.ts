import BlockchainRepository from "../../domain/ports/BlockchainRepo";
import { postMessage } from "./postMessage";

export class IotaRepo implements BlockchainRepository {
    protected uri: string

    constructor(uri: string) {
        this.uri = uri;
    }


    public postMessage = postMessage.bind(this)
    // public getUserById = getUserById.bind(this);


}
