import { IEvent } from "./initEvent";

export interface IDocumentCreated extends IEvent {
    event: {
        user_id: string;
        document_id: string;
        data: string
    }
}

export class DocumentCreated implements IDocumentCreated {
    public event: {
        user_id: string;
        document_id: string;
        data: string;
    }

    constructor(user_id: string, document_id: string, data: string) {
        this.event = {
            user_id: user_id,
            document_id: document_id,
            data: data
        }
    }

    public name(): string {
        return "event.transaction.created"
    }
    public exchange(): string {
        return "Transaction"
    }
    public routing(): string {
        return "created"
    }
}
