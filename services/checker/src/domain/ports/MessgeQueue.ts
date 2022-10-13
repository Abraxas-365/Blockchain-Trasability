import { IEventInfo } from "../events/initEvent";

export default interface MessageQueue {
    postEvent(event: IEventInfo): any
    listenEvent(exchange: string, route: string, action: Function): Promise<any>
}
