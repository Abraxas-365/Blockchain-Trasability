import { IEvent } from "./initEvent";

export class TransactionPosted implements IEvent {
    user_id: string;
    transaction_id: string;


    constructor(user_id: string, transaction_id: string) {
        this.user_id = user_id;
        this.transaction_id = transaction_id;
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
