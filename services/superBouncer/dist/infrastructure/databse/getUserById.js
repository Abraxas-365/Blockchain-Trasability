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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
function getUserById(userId) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        const collection = this.client.db(this.Database).collection("users");
        const pipeline = [
            { "$match": { "_id": userId } },
            {
                "$lookup": {
                    "from": "companies",
                    "localField": "company",
                    "foreignField": "_id",
                    "as": "company"
                }
            },
            {
                "$unwind": {
                    "path": "$emitter",
                    "preserveNullAndEmptyArrays": true
                }
            }
        ];
        let usuarios = [];
        const aggCursor = collection.aggregate(pipeline);
        try {
            for (var aggCursor_1 = __asyncValues(aggCursor), aggCursor_1_1; aggCursor_1_1 = yield aggCursor_1.next(), !aggCursor_1_1.done;) {
                const doc = aggCursor_1_1.value;
                usuarios.push(doc);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (aggCursor_1_1 && !aggCursor_1_1.done && (_a = aggCursor_1.return)) yield _a.call(aggCursor_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return usuarios[0];
    });
}
exports.getUserById = getUserById;
