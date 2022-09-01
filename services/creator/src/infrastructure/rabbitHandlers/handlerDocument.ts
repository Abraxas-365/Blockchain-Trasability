import { IDocumentCreated } from "../../domain/events/documentCreated";
import { RabbitHandlers } from "./initRabbitHandlers";




export async function newDocument(this: RabbitHandlers, content: IDocumentCreated): Promise<any> {
    let event = content.event
    console.log("Nuevo evento", content.event)
    this.application.postMessage(event.user_id, event.data, event.document_id)
}
