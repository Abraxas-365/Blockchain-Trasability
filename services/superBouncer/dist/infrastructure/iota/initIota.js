"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IotaRepo = void 0;
const postMessage_1 = require("./postMessage");
class IotaRepo {
    constructor(uri) {
        this.postMessage = postMessage_1.postMessage.bind(this);
        this.uri = uri;
    }
}
exports.IotaRepo = IotaRepo;
