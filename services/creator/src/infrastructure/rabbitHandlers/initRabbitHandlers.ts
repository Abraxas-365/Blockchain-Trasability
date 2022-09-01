import { IApplication } from "../../application/initApp"
import { IDocumentCreated } from "../../domain/events/documentCreated";
import { newDocument } from "./handlerDocument";

export interface IRabbitHandlers {
    newDocument(content: IDocumentCreated): Promise<any>

}

export class RabbitHandlers implements IRabbitHandlers {
    protected uri: string
    protected application: IApplication

    constructor(uri: string, application: IApplication) {
        this.uri = uri;
        this.application = application;
    }

    public newDocument = newDocument.bind(this)


}
