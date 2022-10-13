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
const BlockchainTransaction_1 = require("../../domain/models/BlockchainTransaction");
const client_1 = require("@iota/client");
function postMessage(user, data) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("----POSTMESSAGE----");
        const client = new client_1.Client({
            // Insert your node URL in the .env.
            nodes: ["https://api.testnet.shimmer.network"],
            localPow: true,
        });
        const mnemonic = "endorse answer radar about source reunion marriage tag sausage weekend frost daring base attack because joke dream slender leisure group reason prepare broken river";
        console.log("MNEMOOO", mnemonic);
        const secretManager = { Mnemonic: mnemonic };
        // Create block with tagged payload
        const addresses = yield client.generateAddresses(secretManager, {
            range: {
                start: 1,
                end: 2,
            },
        });
        // We prepare the transaction
        // Insert the output address and amount to spend. The amount cannot be zero.
        const blockIdAndBlock = yield client.buildAndPostBlock(secretManager, {
            tag: (0, client_1.utf8ToHex)('MagicTrust'),
            data: (0, client_1.utf8ToHex)(data),
            output: {
                address: addresses[0],
                amount: '1000000',
            },
        });
        console.log("data", data);
        return new BlockchainTransaction_1.BlockchainTransaction(blockIdAndBlock[0], JSON.stringify(blockIdAndBlock[1]));
    });
}
exports.postMessage = postMessage;
