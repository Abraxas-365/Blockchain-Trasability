import { v4 as uuid } from 'uuid';

export interface IEvent {
    name(): string;
    exchange(): string;
    routing(): string;
}

export class EventInfo {
    id: string;
    name: string;
    exchange: string;
    routing: string;
    time_stamp: Date;
    public event: IEvent;

    constructor(event: IEvent) {
        this.id = uuid();
        this.name = event.name();
        this.exchange = event.exchange();
        this.routing = event.routing();
        this.event = event;
        this.time_stamp = new Date();
    }

}

export interface IEventInfo {
    id: string;
    name: string;
    exchange: string;
    routing: string;
    time_stamp: Date;
    event: IEvent;
}
