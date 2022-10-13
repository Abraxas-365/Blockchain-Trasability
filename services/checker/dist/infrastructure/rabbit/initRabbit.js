"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rabbit = void 0;
const listenEvent_1 = require("./listenEvent");
const postEvent_1 = require("./postEvent");
class Rabbit {
    constructor(uri) {
        this.postEvent = postEvent_1.postEvent.bind(this);
        this.listenEvent = listenEvent_1.listenEvent.bind(this);
        this.uri = uri;
    }
}
exports.Rabbit = Rabbit;
