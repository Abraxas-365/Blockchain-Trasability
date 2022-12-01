import { IApplication } from "../../application/initApp";
import { ITransactionPosted } from "../../domain/events/transactionPosted";

export interface IRabbitHandlers {
  newDocument(content: ITransactionPosted): Promise<any>;
}

export class RabbitHandlers implements IRabbitHandlers {
  protected uri: string;
  protected application: IApplication;

  constructor(uri: string, application: IApplication) {
    this.uri = uri;
    this.application = application;
  }

  public newDocument = newDocument.bind(this);
}
