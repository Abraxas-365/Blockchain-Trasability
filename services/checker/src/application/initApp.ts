import BlockchainRepository from "../domain/ports/BlockchainRepo";
import DataBaseRepository from "../domain/ports/DataBaseRepo";
import MessageQueue from "../domain/ports/MessgeQueue";
import { CheckDocumetInBlockchain } from "./checkDocumentInBlockchain";


export interface IApplication {
    CheckDocumetInBlockchain(): Promise<any>
}
export default class Application implements IApplication {
    protected dataBaseRepository: DataBaseRepository;
    protected iotaRepository: BlockchainRepository
    protected messageQueue: MessageQueue

    constructor(dataBaseRepository: DataBaseRepository, iotaRepo: BlockchainRepository, messageQueue: MessageQueue) {
        this.dataBaseRepository = dataBaseRepository;
        this.iotaRepository = iotaRepo;
        this.messageQueue = messageQueue;
    }
    CheckDocumetInBlockchain = CheckDocumetInBlockchain.bind(this);
}
