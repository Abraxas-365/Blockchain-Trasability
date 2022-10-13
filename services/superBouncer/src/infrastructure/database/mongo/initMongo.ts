import * as mongoDB from "mongodb";
import { UserRepository } from "../../../domain/ports/userRepo";
import { getUser } from "./getUser";
import { update2FA } from "./update2FA";
// import { getUserById } from "./getUserById";


export class MongoRepo implements UserRepository {
    protected client: mongoDB.MongoClient;
    protected database: string;
    protected collection: string;

    constructor(mongoUri: string, database: string, collection: string) {
        this.database = database;
        this.client = new mongoDB.MongoClient(mongoUri)
        this.collection = collection
    }

    public getUser = getUser.bind(this);
    public update2FA = update2FA.bind(this)


}
