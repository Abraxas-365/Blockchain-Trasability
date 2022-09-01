import { IUser, User } from "../../domain/models/User";
import { MongoRepo } from "./initRepo";



export async function getUserById(this: MongoRepo, userId: string): Promise<IUser> {
    const collection = this.client.db(this.Database).collection("users")
    const pipeline = [
        { "$match": { "_id": userId } },

        {
            "$lookup": {
                "from": "companies",
                "localField": "company",
                "foreignField": "_id",
                "as": "company"
            }
        },

        {
            "$unwind": {
                "path": "$company",
                "preserveNullAndEmptyArrays": true
            }
        }
    ]

    let usuarios: Array<IUser> = []
    const aggCursor = collection.aggregate<IUser>(pipeline);
    for await (const doc of aggCursor) {
        usuarios.push(doc)
    }
    return usuarios[0]
}
