import { IEvent } from "./initEvent";

export interface IDocumentCreated extends IEvent {
    event: {
        user_id: string;
        document_id: string;
        data: string
    }
}
