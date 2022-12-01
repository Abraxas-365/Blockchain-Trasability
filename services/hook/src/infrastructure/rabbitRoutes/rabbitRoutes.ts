import MessageQueue from "../../domain/ports/MessgeQueue";
import { IRabbitHandlers } from "../rabbitHandlers/initRabbitHandlers";

export function Routes(rabbit: MessageQueue, handler: IRabbitHandlers): any {
    rabbit.listenEvent("Transaction", "created", handler.newDocument)
}
