import { IDocument } from "../models/Document";
import { IUser } from "../models/User";

export default interface DataBaseRepository {
  getDocumentById(documentId: string): Promise<IDocument | null>;
  getUserById(userId: string): Promise<IUser>;
}
