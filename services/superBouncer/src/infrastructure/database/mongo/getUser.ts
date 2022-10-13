import { IUser } from "../../../domain/models/user";
import { MongoRepo } from "./initMongo";

export async function getUser(this: MongoRepo, key: string, value: string): Promise<IUser | null> {
    const collection = this.client.db(this.database).collection(this.collection)
    const filter = { [key]: value }
    let user = await collection.findOne<IUser>(filter);

    return user
}
