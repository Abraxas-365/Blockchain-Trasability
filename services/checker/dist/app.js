"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./domain/models/User");
const initIota_1 = require("./infrastructure/iota/initIota");
// var rb = new Rabbit("amqp://admin:admin@rabbitmq:5672/")
var iotarepo = new initIota_1.IotaRepo("dd");
iotarepo.postMessage(new User_1.User("d"), "TEST DE LD").then(console.log);
// var dbrepo = new MongoRepo("mongodb://root:example@mongo:27017/", "MagicTrust")
// var app = new Application(dbrepo, iotarepo, rb);
// var handler = new RabbitHandlers("dd", app)
// Routes(rb, handler)
