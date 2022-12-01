import { EventInfo } from "../../domain/events/initEvent";
import { Rabbit } from "./initRabbit";

export function postEvent(this: Rabbit, eventInfo: EventInfo) {
    var amqp = require('amqplib/callback_api');

    amqp.connect(this.uri, function (error0: any, connection: any) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1: any, channel: any) {
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
            process.exit(0)
        }, 500);
    });
}
