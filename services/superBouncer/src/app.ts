import express, { Express, Request, Response } from 'express';
import { Application } from './application/initApp';
import { MongoRepo } from './infrastructure/database/mongo/initMongo';
import { Handler } from './infrastructure/rest/handlers/initHandler';
import { Routes } from './infrastructure/rest/routes';
const app = express()
const port = 3005
app.use(express.json());
app.use(express.urlencoded());

let dbrepo = new MongoRepo("mongodb://root:example@mongo:27017/", "MagicTrust", "users")
let application = new Application(dbrepo)
let hander = new Handler(application)
Routes(app, hander)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
