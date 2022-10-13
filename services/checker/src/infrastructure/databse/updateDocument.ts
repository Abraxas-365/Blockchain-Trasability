import { MongoRepo } from "./initRepo";

export async function updateDocument(this: MongoRepo, key: string, value: string, status: string): Promise<any> {
    const collection = this.client.db(this.database).collection(this.collection);
    await collection.updateOne(
        { [key]: value },
        {
            $set: {
                status: status,
            }
        },
        { upsert: true }
    )
}
