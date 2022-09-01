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
exports.listenEvent = void 0;
function listenEvent(exchange, route, action) {
    return __awaiter(this, void 0, void 0, function* () {
        var amqp = require('amqplib/callback_api');
        amqp.connect('amqp://admin:admin@rabbitmq:5672/', function (error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function (error1, channel) {
                if (error1) {
                    throw error1;
                }
                channel.assertExchange(exchange, 'direct', {
                    durable: true
                });
                channel.assertQueue('', {
                    exclusive: true
                }, function (error2, q) {
                    if (error2) {
                        throw error2;
                    }
                    console.log(' [*] Waiting for logs. To exit press CTRL+C');
                    channel.bindQueue(q.queue, exchange, route);
                    channel.consume(q.queue, function (msg) {
                        console.log(" [x] %s: '%s'", msg.fields.routingKey, msg.content.toString());
                        action(JSON.parse(msg.content.toString()));
                    }, {
                        noAck: true
                    });
                });
            });
        });
    });
}
exports.listenEvent = listenEvent;
