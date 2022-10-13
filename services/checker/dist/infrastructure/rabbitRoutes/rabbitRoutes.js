"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
function Routes(rabbit, handler) {
    rabbit.listenEvent("Transaction", "created", handler.newDocument);
}
exports.Routes = Routes;
