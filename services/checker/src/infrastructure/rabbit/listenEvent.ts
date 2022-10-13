import { Rabbit } from "./initRabbit";

export async function listenEvent(this: Rabbit, exchange: string, route: string, action: Function): Promise<any> {
    var amqp = require('amqplib/callback_api');


    amqp.connect('amqp://admin:admin@rabbitmq:5672/', function (error0: any, connection: any) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1: any, channel: any) {
            if (error1) {
                throw error1;
            }

            channel.assertExchange(exchange, 'direct', {
                durable: true
            });
            channel.prefetch(1);
            channel.assertQueue('', {
                exclusive: true
            }, function (error2: any, q: any) {
                if (error2) {
                    throw error2;
                }
                console.log(' [*] Waiting for logs. To exit press CTRL+C');

                channel.bindQueue(q.queue, exchange, route);

                channel.consume(q.queue, function (msg: any) {
                    console.log(" [x] %s: '%s'", msg.fields.routingKey, msg.content.toString());
                    action(JSON.parse(msg.content.toString()))
                    setTimeout(function () {
                        console.log(" [x] Done");
                        channel.ack(msg);
                    }, 20000);
                }, {
                    noAck: false
                });
            });
        });
    });
}
