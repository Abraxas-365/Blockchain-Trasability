import { IEvent } from "./initEvent";

export class TransactionPosted implements IEvent {
  user_id: string;
  docuement_id: string;

  constructor(user_id: string, docuement_id: string) {
    this.user_id = user_id;
    this.docuement_id = docuement_id;
  }

  public name(): string {
    return "event.transaction.posted";
  }

  public exchange(): string {
    return "Transaction";
  }
  public routing(): string {
    return "posted";
  }
}

export interface ITransactionPosted extends IEvent {
  event: {
    user_id: string;
    docuement_id: string;
  };
}
