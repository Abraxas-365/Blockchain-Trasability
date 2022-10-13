"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postEvent = void 0;
function postEvent(eventInfo) {
    var amqp = require('amqplib/callback_api');
    amqp.connect(this.uri, function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }
            var exchange = eventInfo.exchange;
            var msg = eventInfo.event;
            channel.assertExchange(exchange, 'direct', {
                durable: false
            });
            channel.publish(exchange, eventInfo.routing, Buffer.from(JSON.stringify(msg)));
            console.log(" [x] Sent %s: '%s'", eventInfo.routing, msg);
        });
        setTimeout(function () {
            connection.close();
            process.exit(0);
        }, 500);
    });
}
exports.postEvent = postEvent;
