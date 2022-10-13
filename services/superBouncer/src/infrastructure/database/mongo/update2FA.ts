import { MongoRepo } from "./initMongo";

export async function update2FA(this: MongoRepo, user_id: string, enable: boolean, token: string): Promise<any> {
    const collection = this.client.db(this.database).collection(this.collection);
    await collection.updateOne(
        { _id: user_id },
        {
            $set: {
                authentication: {
                    twoFactorAuthentication: {
                        active: enable,
                        token: token
                    }
                }
            }
        },
        { upsert: true }
    )
}
