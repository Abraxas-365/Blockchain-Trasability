import DataBaseRepository from "../../domain/ports/DataBaseRepo";
import * as mongoDB from "mongodb";
import { updateTransaction } from "./updateTransaction";
import { getUserById } from "./getUserById";
// import { getUserById } from "./getUserById";


export class MongoRepo implements DataBaseRepository {
    public client: mongoDB.MongoClient;
    public Database: string;

    constructor(mongoUri: string, database: string) {
        this.Database = database;
        this.client = new mongoDB.MongoClient(mongoUri)
    }


    public updateTransaction = updateTransaction.bind(this);
    public getUserById = getUserById.bind(this);


}
