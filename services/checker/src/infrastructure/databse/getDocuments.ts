import { IDocument } from "../../domain/models/Document";
import { MongoRepo } from "./initRepo";



export async function getDocuments(this: MongoRepo, key: string, value: any): Promise<Array<IDocument>> {
    const collection = this.client.db(this.database).collection(this.collection)
    const filter = { [key]: value }

    let documents: Array<IDocument> = []
    const aggCursor = collection.find<IDocument>(filter);
    for await (const doc of aggCursor) {
        documents.push(doc)
    }
    return documents
}
