"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessage = void 0;
function postMessage(userId, data, transactionId) {
    return __awaiter(this, void 0, void 0, function* () {
        // get user from database
        let user = yield this.dataBaseRepository.getUserById(userId);
        console.log("User", user);
        // //send to iota
        // let iotaTransactionResult = this.iotaRepository.postMessage(user, data);
        // await this.iotaRepository.postMessage(new User(""), data)
        // //update the database
        // this.dataBaseRepository.updateTransaction(JSON.stringify(iotaTransactionResult.message), transactionId, iotaTransactionResult.messageId);
        // //send event of transaction posted
        // this.messageQueue.postEvent(new EventInfo(new TransactionPosted(user.id, transactionId, iotaTransactionResult.messageId)))
    });
}
exports.postMessage = postMessage;
