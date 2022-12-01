import { ITransactionPosted } from "../../domain/events/transactionPosted";
import { RabbitHandlers } from "./initRabbitHandlers";

export async function newDocument(this: RabbitHandlers, content: ITransactionPosted): Promise<any> {
  let event = content.event;
  console.log("Nuevo evento", content.event);
  await this.application.notifyClient(event.docuement_id);
}
