import MessageQueue from "../../domain/ports/MessgeQueue";
import { listenEvent } from "./listenEvent";
import { postEvent } from "./postEvent";


export class Rabbit implements MessageQueue {
    protected uri: string

    constructor(uri: string) {
        this.uri = uri
    }

    public postEvent = postEvent.bind(this)
    public listenEvent = listenEvent.bind(this)
}
