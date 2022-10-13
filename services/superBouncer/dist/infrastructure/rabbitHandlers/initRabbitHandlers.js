"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitHandlers = void 0;
const handlerDocument_1 = require("./handlerDocument");
class RabbitHandlers {
    constructor(uri, application) {
        this.newDocument = handlerDocument_1.newDocument.bind(this);
        this.uri = uri;
        this.application = application;
    }
}
exports.RabbitHandlers = RabbitHandlers;
