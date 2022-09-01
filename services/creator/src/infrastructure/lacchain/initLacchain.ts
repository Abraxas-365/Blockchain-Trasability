import Web3 from "web3";
import BlockchainRepository from "../../domain/ports/BlockchainRepo";

export class LacchainRepo implements BlockchainRepository {
    private uri: string
    protected web3: any

    constructor(uri: string) {
        this.uri = uri;
        this.web3 = new Web3(new Web3.providers.HttpProvider(uri));
    }


    public postMessage = postMessage.bind(this)
    // public getUserById = getUserById.bind(this);


}
