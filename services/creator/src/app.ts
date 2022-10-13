import Application from "./application/initApp";
import { MongoRepo } from "./infrastructure/databse/initRepo";
import { IotaRepo } from "./infrastructure/iota/initIota";
import { LacchainRepo } from "./infrastructure/lacchain/initLacchain";
import { Rabbit } from "./infrastructure/rabbit/initRabbit";
import { RabbitHandlers } from "./infrastructure/rabbitHandlers/initRabbitHandlers";
import { Routes } from "./infrastructure/rabbitRoutes/rabbitRoutes";

let rb = new Rabbit("amqp://admin:admin@rabbitmq:5672/")

let iotarepo = new IotaRepo("https://api.testnet.shimmer.network")
let lacchainrepo = new LacchainRepo("http://200.60.90.40:4545")

let dbrepo = new MongoRepo("mongodb://root:example@mongo:27017/", "MagicTrust")

let app = new Application(dbrepo, iotarepo, lacchainrepo, rb);
let handler = new RabbitHandlers("dd", app)
Routes(rb, handler)
