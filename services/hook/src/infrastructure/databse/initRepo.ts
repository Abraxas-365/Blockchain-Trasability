import DataBaseRepository from "../../domain/ports/DataBaseRepo";
import * as mongoDB from "mongodb";
import { getDocumentById } from "./getDocumentById";

export class MongoRepo implements DataBaseRepository {
  public client: mongoDB.MongoClient;
  public Database: string;

  constructor(mongoUri: string, database: string) {
    this.Database = database;
    this.client = new mongoDB.MongoClient(mongoUri);
  }

  public getDocumentById = getDocumentById.bind(this);
}
