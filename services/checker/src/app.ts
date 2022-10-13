import Application from "./application/initApp";
import { MongoRepo } from "./infrastructure/databse/initRepo";
import { IotaRepo } from "./infrastructure/iota/initIota";
import { Rabbit } from "./infrastructure/rabbit/initRabbit";

let rb = new Rabbit("amqp://admin:admin@rabbitmq:5672/")

let iotarepo = new IotaRepo("https://api.testnet.shimmer.network")

let dbrepo = new MongoRepo("mongodb://root:example@mongo:27017/", "MagicTrust", "documents")

let app = new Application(dbrepo, iotarepo, rb);

app.CheckDocumetInBlockchain()
