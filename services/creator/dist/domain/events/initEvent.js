"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventInfo = void 0;
const uuid_1 = require("uuid");
class EventInfo {
    constructor(event) {
        this.id = (0, uuid_1.v4)();
        this.name = event.name();
        this.exchange = event.exchange();
        this.routing = event.routing();
        this.event = event;
        this.time_stamp = new Date();
    }
}
exports.EventInfo = EventInfo;
