"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postMessage_1 = require("./postMessage");
class Application {
    constructor(dataBaseRepository, iotaRepo, messageQueue) {
        this.postMessage = postMessage_1.postMessage.bind(this);
        this.dataBaseRepository = dataBaseRepository;
        this.iotaRepository = iotaRepo;
        this.messageQueue = messageQueue;
    }
}
exports.default = Application;
