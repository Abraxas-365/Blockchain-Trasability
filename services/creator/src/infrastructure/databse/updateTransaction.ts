import { IBlockchainTransaction } from "../../domain/models/BlockchainTransaction";
import { MongoRepo } from "./initRepo";

export async function updateTransaction(this: MongoRepo, documentId: string, transactionData: IBlockchainTransaction, status: string): Promise<any> {
    const collection = this.client.db(this.Database).collection("documents");
    console.log("documentID", documentId)
    await collection.updateOne(
        { _id: documentId },
        {
            $set: {
                transaction_id: transactionData.transaction_id,
                transaction_result: transactionData.transaction_info,
                status: status,
                upload_date: new Date(),
                platform: transactionData.technologie
            }
        },
        { upsert: true }
    )
}
