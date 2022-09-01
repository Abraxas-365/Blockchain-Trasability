import Application from "./application/initApp";
import { User } from "./domain/models/User";
import { MongoRepo } from "./infrastructure/databse/initRepo";
import { IotaRepo } from "./infrastructure/iota/initIota";
import { Rabbit } from "./infrastructure/rabbit/initRabbit";
import { RabbitHandlers } from "./infrastructure/rabbitHandlers/initRabbitHandlers";
import { Routes } from "./infrastructure/rabbitRoutes/rabbitRoutes";

var rb = new Rabbit("amqp://admin:admin@rabbitmq:5672/")
var iotarepo = new IotaRepo("https://api.testnet.shimmer.network")


var dbrepo = new MongoRepo("mongodb://root:example@mongo:27017/", "MagicTrust")
var app = new Application(dbrepo, iotarepo, rb);
var handler = new RabbitHandlers("dd", app)
Routes(rb, handler)
