import DataBaseRepository from "../../domain/ports/DataBaseRepo";
import * as mongoDB from "mongodb";
import { getDocuments } from "./getDocuments";
import { updateDocument } from "./updateDocument";


export class MongoRepo implements DataBaseRepository {
    protected client: mongoDB.MongoClient;
    protected collection: string
    protected database: string;

    constructor(mongoUri: string, database: string, collection: string) {
        this.database = database;
        this.collection = collection;
        this.client = new mongoDB.MongoClient(mongoUri)
    }


    public getDocuments = getDocuments.bind(this);
    public updateDocument = updateDocument.bind(this);



}
