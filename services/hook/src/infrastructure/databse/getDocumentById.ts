import { IDocument } from "../../domain/models/Document";
import { MongoRepo } from "./initRepo";

export async function getDocumentById(this: MongoRepo, documentId: string): Promise<IDocument | null> {
  const collection = this.client.db(this.Database).collection("documents");

  const filter = { _id: documentId };
  let documento = await collection.findOne<IDocument>(filter);
  return documento;
}
