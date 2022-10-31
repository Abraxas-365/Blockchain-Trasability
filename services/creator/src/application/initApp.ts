import BlockchainRepository from "../domain/ports/BlockchainRepo";
import DataBaseRepository from "../domain/ports/DataBaseRepo";
import MessageQueue from "../domain/ports/MessgeQueue";
import { postMessage } from "./postMessage";

export interface IApplication {
  postMessage(userId: string, data: string, documentId: string): any;
}

export default class Application implements IApplication {
  protected dataBaseRepository: DataBaseRepository;
  protected iotaRepository: BlockchainRepository;
  protected lacchainRepository: BlockchainRepository;
  protected messageQueue: MessageQueue;

  constructor(
    dataBaseRepository: DataBaseRepository,
    iotaRepo: BlockchainRepository,
    lacchainRepo: BlockchainRepository,
    messageQueue: MessageQueue
  ) {
    this.dataBaseRepository = dataBaseRepository;
    this.iotaRepository = iotaRepo;
    this.lacchainRepository = lacchainRepo;
    this.messageQueue = messageQueue;
  }
  postMessage = postMessage.bind(this);
}
