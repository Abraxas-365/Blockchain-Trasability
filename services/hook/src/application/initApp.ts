import DataBaseRepository from "../domain/ports/DataBaseRepo";
import MessageQueue from "../domain/ports/MessgeQueue";
import { notifyClient } from "./notifyClient";

export interface IApplication {
  notifyClient(docuemtId: string): Promise<any>;
}

export default class Application implements IApplication {
  protected messageQueue: MessageQueue;
  protected database: DataBaseRepository;

  constructor(messageQueue: MessageQueue, database: DataBaseRepository) {
    this.messageQueue = messageQueue;
    this.database = database;
  }
  notifyClient = notifyClient.bind(this);
}
