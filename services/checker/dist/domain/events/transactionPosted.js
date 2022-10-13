"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionPosted = void 0;
class TransactionPosted {
    constructor(user_id, transaction_id, messageId) {
        this.user_id = user_id;
        this.transaction_id = transaction_id;
        this.message_id = messageId;
    }
    name() {
        return "event.transaction.posted";
    }
    exchange() {
        return "Transaction";
    }
    routing() {
        return "posted";
    }
}
exports.TransactionPosted = TransactionPosted;
